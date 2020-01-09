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
  const post = pageContext.post.node;
  const title = post.frontmatter?.title;
  const path = post.frontmatter?.path;
  const date = post.frontmatter?.date;
  const tags = post.frontmatter?.tags as Array<string> | null | undefined;
  const body = post.body;
  const prevPath = pageContext.post.previous?.frontmatter?.path;
  const prevTitle = pageContext.post.previous?.frontmatter?.title;
  const nextPath = pageContext.post.next?.frontmatter?.path;
  const nextTitle = pageContext.post.next?.frontmatter?.title;

  return (
    <BlogTemplate
      title={title || "タイトル未設定"}
      path={`/post/${path}` || "/"}
      date={date || "1900-01-01"}
      tags={tags || []}
      prevPath={prevPath ? `/post/${prevPath}` : null}
      prevTitle={prevTitle}
      nextPath={nextPath ? `/post/${nextPath}` : null}
      nextTitle={nextTitle}
    >
      <MDXProvider components={Article}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </BlogTemplate>
  );
};

export default BlogTemplateContainer;
