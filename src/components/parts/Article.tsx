import { Components } from "@mdx-js/react";
import React from "react";

const Article: Components = {
  h1: (props: JSX.IntrinsicElements["h1"]) => (
    <h1 className="text-3xl border-b font-semibold m-2" {...props} />
  ),
  h2: (props: JSX.IntrinsicElements["h2"]) => (
    <h2 className="text-2xl border-b font-semibold m-2" {...props} />
  ),
  h3: (props: JSX.IntrinsicElements["h3"]) => (
    <h3 className="text-xl border-b font-semibold m-2" {...props} />
  ),
  h4: (props: JSX.IntrinsicElements["h4"]) => (
    <h4 className="text-lg border-b font-semibold m-2" {...props} />
  ),
  h5: (props: JSX.IntrinsicElements["h5"]) => (
    <h5 className="text-base border-b font-semibold m-2" {...props} />
  ),
  h6: (props: JSX.IntrinsicElements["h6"]) => (
    <h6 className="text-sm border-b font-semibold m-2" {...props} />
  ),
  p: (props: JSX.IntrinsicElements["p"]) => (
    <p className="py-2 leading-relax" {...props} />
  ),
  strong: (props: JSX.IntrinsicElements["strong"]) => (
    <strong className="font-semibold" {...props} />
  ),
  a: (props: JSX.IntrinsicElements["a"]) => (
    <a className="text-blue-500 underline" {...props} />
  ),
  ul: (props: JSX.IntrinsicElements["ul"]) => (
    <ul className="list-disc pl-8 py-2" {...props} />
  ),
  ol: (props: JSX.IntrinsicElements["ol"]) => (
    <ol className="list-decimal pl-8 py-2" {...props} />
  ),
  li: (props: JSX.IntrinsicElements["li"]) => (
    <li className="py-1" {...props} />
  ),
  blockquote: (props: JSX.IntrinsicElements["blockquote"]) => (
    <blockquote className="px-4" {...props} />
  ),
  inlineCode: (props: JSX.IntrinsicElements["code"]) => (
    <code className="text-red-400" {...props} />
  )
};

export default Article;
