import { MDXProvider, Components } from "@mdx-js/react";
import { FC } from "react";

const components: Components = {
  a: ({ children }) => <a className="cursor-pointer">{children}</a>,
  blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  code: ({ children }) => <code>{children}</code>,
  del: ({ children }) => <del>{children}</del>,
  em: ({ children }) => <em>{children}</em>,
  h1: ({ children }) => <h1 className="text-5xl my-4">{children}</h1>,
  h2: ({ children }) => <h2 className="text-4xl my-4">{children}</h2>,
  h3: ({ children }) => <h3 className="text-3xl my-4">{children}</h3>,
  h4: ({ children }) => <h4 className="text-2xl my-4">{children}</h4>,
  h5: ({ children }) => <h5 className="my-4">{children}</h5>,
  hr: ({ children }) => <hr className="my-4">{children}</hr>,
  img: ({ src, alt }) => <img src={src} alt={alt || ""} />,
  inlineCode: ({ children }) => <pre>{children}</pre>,
  table: ({ children }) => <table>{children}</table>,
  td: ({ children }) => <td>{children}</td>,
  tr: ({ children }) => <tr>{children}</tr>,
  ul: ({ children }) => <ul>{children}</ul>,
};

const MDX: FC = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDX;
