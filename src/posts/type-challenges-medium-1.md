---
title: "type challengesのmediumを埋める(1)"
created: "2022-01-09"
category: "プログラミング"
---

<!-- TOC -->

- [解き方と考えたこと](#解き方と考えたこと)
  - [Get Return Type](#get-return-type)
  - [Omit](#omit)
  - [Readonly 2](#readonly-2)
  - [Deep Readonly](#deep-readonly)
  - [Tuple to Union](#tuple-to-union)
  - [Chainable Options](#chainable-options)
  - [Last of Array](#last-of-array)
  - [Pop](#pop)
  - [Promise.all](#promiseall)
  - [Type Lookup](#type-lookup)
- [Get Return Type から Type Lookup までの感想](#get-return-type-から-type-lookup-までの感想)

<!-- /TOC -->

## 解き方と考えたこと

easy と同じようにまとめます。簡単だと思ったところにはそう書いてあります。

### Get Return Type

これは easy にいてもいいのでは？

```ts
type MyReturnType<T> = T extends (...args: any) => infer R ? R : never;
```

### Omit

Exclude を使う。ビルトインの`Exclude`を使いたくない場合は easy でやった `MyExclude` を引っ張ってくればいいと思う。
簡単

```ts
type MyOmit<T, K> = { [Key in Exclude<keyof T, K>]: T[Key] };
```

### Readonly 2

特定のプロパティのみ readonly にするやつ
デフォルト型引数をちゃんと考えてやると良い

```ts
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Key in K]: T[Key];
} & { [Key in Exclude<keyof T, K>]: T[Key] };
```

### Deep Readonly

Record 型を忘れてなければ大丈夫だと思う。簡単

```ts
type DeepReadonly<T> = {
  readonly [Key in keyof T]: T[Key] extends Record<string, unknown>
    ? DeepReadonly<T[Key]>
    : T[Key];
};
```

### Tuple to Union

簡単

```ts
type TupleToUnion<T extends any[]> = T[number];
```

### Chainable Options

ちょっと答えみないとわからなかった...
型引数にデフォルト値を設定するのが肝で、そこに気づけば簡単かなぁ...
自力だと無理だったのでコードは残さないでおく

### Last of Array

簡単

```ts
type Last<T extends any[]> = T extends [...infer E, infer L] ? L : never;
```

### Pop

簡単

```ts
type Pop<T extends any[]> = T extends [...infer E, infer L] ? E : never;
```

### Promise.all

- `values`の型に`readonly` を与えるのに気づかないと無理

```ts
declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K] }>;
```

### Type Lookup

type フィールドが T であればいいのでそれをチェックする。
簡単だと思う。

```ts
type LookUp<U, T> = U extends { type: T } ? U : never;
```

## Get Return Type から Type Lookup までの感想

easy レベルの問題が普通にある。Type Lookup までの中では Chainable Options が一番難易度が高く、その次に Readonly 系、Promise.all が同じくらいに感じた。
