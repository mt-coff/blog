---
title: "type challengesのmediumを埋める(2)"
created: "2022-01-10"
category: "プログラミング"
---

<!-- TOC -->

- [Trim Left](#trim-left)
- [Trim](#trim)
- [Capitalize](#capitalize)
- [Replace](#replace)
- [ReplaceAll](#replaceall)
- [Append Argument](#append-argument)
- [Permutation](#permutation)
- [Length of String](#length-of-string)
- [Flatten](#flatten)
- [Append to Object](#append-to-object)
- [Absolute](#absolute)
- [String to Union](#string-to-union)
- [Merge](#merge)
- [CamelCase](#camelcase)
- [KebabCase](#kebabcase)
- [Trim Left 〜 KebabCase の感想](#trim-left-〜-kebabcase-の感想)

<!-- /TOC -->

### Trim Left

`\n`, `\t` も取り除く必要がある。

```ts
type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer U}`
  ? TrimLeft<U>
  : S;
```

### Trim

TrimLeft は作ったのでそれを応用して TrimRight を作り両方適用すればいいだけ。やってる順番が並んでるバッジの順なので後ほど TrimRight を作る問題がある。

```ts
type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer U}`
  ? TrimLeft<U>
  : S;
type TrimRight<S extends string> = S extends `${infer U}${" " | "\n" | "\t"}`
  ? TrimRight<U>
  : S;
type Trim<S extends string> = TrimRight<TrimLeft<S>>;
```

### Capitalize

文字列操作用に Uppercase, Lowercase, Capitalize, Uncapitalize がある。
Capitalize を自分で実装しようというやつ。Uppercase 使えば一発。

```ts
type Capitalize<S extends string> = S extends `${infer First}${infer Other}`
  ? `${Uppercase<First>}${Other}`
  : S;
```

### Replace

最初は以下のように Head と Tail に From が挟まれており、To に入れ替えれば良いと考えた。

```ts
type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Head}${From}${infer Tail}` ? `${Head}${To}${Tail}` : S;
```

これだと `Replace<'foobarbar', '', 'foo'>` のケースが満たせなかったが、空白が来た場合は単に元の文字列を返せばいいので

```ts
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Head}${From}${infer Tail}`
  ? `${Head}${To}${Tail}`
  : S;
```

簡単。

### ReplaceAll

From までで S を分割して処理を分ける。そうしないと変換したものを再度変換して期待通りの結果にならなかったりする。

```ts
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Head}${From}${infer Tail}`
  ? `${Replace<`${Head}${From}`, From, To>}${ReplaceAll<Tail, From, To>}`
  : S;
```

### Append Argument

Parameters の実装の応用みたいな感じ。

```ts
type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer R
) => any
  ? (...args: [...R, A]) => ReturnType<Fn>
  : Fn;
```

### Permutation

元の形変数は T だけだが、これだとどうにもならない。
初期値として T と同じ値を持つ型変数を与えてやることで `A` と `A | B` を両方利用することができるっぽい...
サンプルは以下

```ts
type Test<T, U = T> = T extends U ? [T, U] : [];
type Result = Test<1 | 2>;
// => [1, 1 | 2] | [2, 1 | 2]
```

上記のような挙動を使うと解ける。
普通にわからなかった...

### Length of String

string を tuple に変換して length を取得すれば OK

```ts
type StringToTuple<S extends string> = S extends `${infer First}${infer Tail}`
  ? [First, ...StringToTuple<Tail>]
  : [];
type LengthOfString<S extends string> = StringToTuple<S>["length"];
```

### Flatten

愚直に解く感じ。

```ts
type Flatten<T extends any[]> = T extends [infer U, ...infer K]
  ? U extends any[]
    ? [...Flatten<U>, ...Flatten<K>]
    : [U, ...Flatten<K>]
  : [...T];
```

### Append to Object

簡単。 in で入れたいキーに U も混ぜて conditional type で T のキー以外のときには V を value に入れればいい。

```ts
type AppendToObject<T, U extends string | symbol | number, V> = {
  [Key in keyof T | U]: Key extends keyof T ? T[Key] : V;
};
```

### Absolute

template literal に突っ込んで infer を利用して-を除けば良い。楽勝。

```ts
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}`
  ? U
  : `${T}`;
```

### String to Union

考え方は String of Length と同じだと思い、

```ts
type StringToUnion<T extends string> = T extends `${infer Head}${infer Tail}`
  ? Head | StringToUnion<Tail>
  : T;
```

としたがゼロ文字、一文字しか渡されないケースで死ぬ。0 文字のときは never を返してやる必要がある。

```ts
type StringToUnion<T extends string> = T extends ""
  ? never
  : T extends `${infer Head}${infer Tail}`
  ? Head | StringToUnion<Tail>
  : T;
```

### Merge

愚直にやった。キーが被った場合は後勝ち。

```ts
type Merge<
  F extends Record<string, unknown>,
  S extends Record<string, unknown>
> = {
  [Key in Exclude<keyof F, keyof F & keyof S> | keyof S]: Key extends Exclude<
    keyof F,
    keyof F & keyof S
  >
    ? F[Key]
    : Key extends keyof S
    ? S[Key]
    : never;
};
```

### CamelCase

ケバブケースをキャメルケースにする。
注意点としては `hoge-Fuga-Piyo` のようなものは変換しない。

```ts
type CamelCase<S> = S extends "-"
  ? S
  : S extends `${infer Head}-${infer Tail}`
  ? `${Head extends "" ? "-" : Head}${Tail extends ""
      ? "-"
      : Tail extends Uncapitalize<Tail>
      ? `${CamelCase<Capitalize<Tail>>}`
      : `-${CamelCase<Tail>}`}`
  : S;
```

-を挟んでいる infer で取った型変数が`''` のときは`-` を返すのもポイントかも

### KebabCase

パスカルケースをケバブケースにする。

```ts
type KebabCase<S> = S extends `${infer Head}${infer Tail}`
  ? `${Uncapitalize<Head>}${Tail extends ""
      ? ""
      : Capitalize<Tail> extends Uncapitalize<Tail>
      ? KebabCase<Tail>
      : Tail extends `${Capitalize<Tail>}`
      ? `-${KebabCase<Tail>}`
      : KebabCase<Tail>}`
  : S;
```

CamelCase に続いてゴリ押し感がすごい

## Trim Left 〜 KebabCase の感想

Permutation の挙動が本当にわからなかった。直感的には `[A, A | B]` じゃなくて `[A, A]` になりそうな気がするんだけどそうではないのはかなり学びになった。(実際利用するかと言われるとしないと思う。)
後は、純粋に入れ子が多くなってきていて管理するのが大変。
