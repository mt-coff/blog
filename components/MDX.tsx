import { MDXProvider, Components } from "@mdx-js/react";
import { FC, ReactNode } from "react";
import CodeHightLight from "./CodeHightLight";

const components: Components = {
  a: ({ children }) => (
    <a className="cursor-pointer text-mt-cyan underline">{children}</a>
  ),
  p: ({ children }) => <p className="my-4">{children}</p>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 pl-4 ml-4">{children}</blockquote>
  ),
  code: ({ children, className }: {children: ReactNode, className: string}) => {
    if (!className || !className.startsWith("language-")) {
      return <code className={className}>{children}</code>;
    }
    const language = className.replace("language-", "")

    return <CodeHightLight language={language}>{children}</CodeHightLight>
  },
  del: ({ children }) => <del>{children}</del>,
  em: ({ children }) => <em>{children}</em>,
  h1: ({ children }) => (
    <h1 className="text-5xl my-2 font-semibold">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl my-2 font-semibold">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl my-2 font-semibold">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl my-2 font-semibold">{children}</h4>
  ),
  h5: ({ children }) => <h5 className="my-2 font-semibold">{children}</h5>,
  hr: ({ children }) => <hr className="my-2">{children}</hr>,
  img: ({ src, alt }) => <img src={src} alt={alt || ""} />,
  inlineCode: ({ children }) => (
    <code className="text-mt-magenta bg-mt-yellow-green">`{children}`</code>
  ),
  table: ({ children }) => (
    <table className="border-collapse border my-6">{children}</table>
  ),
  td: ({ children }) => <td className="p-2 border">{children}</td>,
  th: ({ children }) => <th className="p-2 border">{children}</th>,
  tr: ({ children }) => <tr className="p-2">{children}</tr>,
  ul: ({ children }) => <ul className="list-disc pl-8 py-2">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal pl-8 py-2">{children}</ol>,
};

const MDX: FC = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDX;
