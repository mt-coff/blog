---
path: "1"
date: "2020-01-10"
title: "Gatsbyでブログを作ってみた"
description: "Gatsbyでブログを作ってみた"
status: "public"
tags: ["Gatsby", "ブログ"]
keywords: ["Gatsby", "ブログ", "React"]
---

# なぜ

** ~某日~ **

私 「7 割ぐらい実装終わったぞ!(余裕の表情)」  
天の声 「他で Vue 使ってるから Vue 使ってください」  
私 「()」

こうして React から Vue への移行作業が始まったのです...

簡単にですが一瞬でも移行で詰まったことを少しだけ書いていきます。

[Google](https://google.com)

### 子要素の定義

React では子コンポーネントを以下のようにすることで`<MyComponent><div>hoge</div></MyComponent>` といったことができます。

```js{lineNumbers: true}
const hgoe = "fuga";
const MyComponent = ({ children }) => {
  return <div>{children}</div>;
};
```

```go
func hoge() {
  fmt.Printf("")
}
```

> hogehogehgoeho

1. hoge
1. hoge
1. hoge

- hoge
- hoge
- hoge
- hoge

| hoge | fuga | piyo |
| ---- | ---- | ---- |
| hoge | fuga | piyo |
