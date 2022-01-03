---
title: "type challengesのeasyを埋めた"
created: "2022-01-03"
category: "プログラミング"
---

[type-challenges](https://github.com/type-challenges/type-challenges) の easy を埋めたので解き方、どこで詰まったかなど残す。

## 解き方と考えたこと

### 前提

`@ts-expect-error` がついているケースは与えたパラメータではエラーが出るケース。
どこにも注釈がなかった気がするし使ったことがないのでわからなかった。

### Pick

T, K が与えられるので K が T のキーであると制約をかけておく。
`Hoge in Fuga` のようにすると`Piyo[Hoge]` のようにアクセスすることもできる。

```ts
type MyPick<T, K extends keyof T> = { [Key in K]: T[Key] };
```

### Readonly

deep にやる必要はないし、 Pick ができれば難しくない

```ts
type MyReadonly<T> = { readonly [key in keyof T]: T[key] };
```

### Tuple to Object

`@ts-expect-error` に注意

- case を満たせばいいので`any` を変更すればいい

```ts
type TupleToObject<T extends readonly string[]> = { [K in T[number]]: K };
```

### First of Array

テストケースの`Expect<Equal<First<[]>, never>>`が厄介

- 単に先頭にアクセスするだけなら`T[0]`
- `T[0]` が `T[number]` にいるかチェックする

```ts
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
```

### Length of Tuple

注意点

- Array オブジェクトがどういうプロパティを持っているか考える
- any を extends している場合は変更できるか考える

```ts
type Length<T extends readonly any[]> = T["length"];
```

### Exclude

簡単

```ts
type MyExclude<T, U> = T extends U ? never : T;
```

### Awaited

少し考える必要がある。

- infer
- Z が`Promise<Promise<string | number>>`であることに気をつける

```ts
type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? MyAwaited<R>
    : R
  : never;
```

### If

簡単
`@ts-expect-error` に注意

```ts
type If<C extends boolean, T, F> = C extends true ? T : F;
```

### Concat

簡単

```ts
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
```

### Includes

easy の中で一番難しかった。自力では無理だった...
ヒントだけおいておくと

- `{ readonly a: 'A' }, { a: 'A' }` は違う方なので判別する必要がある
- infer を複数利用する

### Push

簡単

```ts
type Push<T extends unknown[], U> = [...T, U];
```

### Unshift

簡単

```ts
type Unshift<T extends unknown[], U> = [U, ...T];
```

### Parameters

infer の使い所に気がつけば解けると思う。

```ts
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer R
) => any
  ? R
  : never;
```

## 難しかったと感じた問題

### Awaited

easy の中で初めて infer を使う問題(のはず)。
正直 easy の問題で infer 使うとは思ってなかった。だからだいぶ考えることになった。

### Includes

一番難しい。正直わからなかったので Issue 覗いた。
Issue を見てもいくつかケース漏れてるパターンが結構あったのでできなくてもしょうがないかもしれない。

## まとめ

Includes が自力で解けなかったのは純粋に実力不足と感じました。TS の型に慣れるのにかなり良い問題でした。ただ、easy の中でも難易度に差がありすぎると感じたので本当に easy としてやってもらうなら Awaited は `infer`を利用すると事前に伝えた上で、Includes はなしでいいんじゃないかなと思いました。
