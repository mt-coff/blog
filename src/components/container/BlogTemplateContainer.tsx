import React, { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MdxEdge } from "../../../types/graphql-types";
import BlogTemplate from "../parts/BlogTemplate";
import Article from "../parts/Article";

type Props = {
  pageContext: {
    post: MdxEdge;
  };
};

const BlogTemplateContainer: FC<Props> = ({ pageContext }) => {
  return (
    <BlogTemplate>
      <MDXProvider components={Article}>
        <MDXRenderer>{pageContext.post.node.body}</MDXRenderer>
      </MDXProvider>
    </BlogTemplate>
  );
};

export default BlogTemplateContainer;
