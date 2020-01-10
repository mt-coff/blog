import React, { FC } from "react";
import PageTemplate from "../components/parts/PageTemplate";
import { graphql } from "gatsby";
import { IndexPageQuery } from "../../types/graphql-types";
import ArticleThumbnail from "../components/parts/ArticleThumbnail";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: IndexPageQuery;
}

// export default class extends React.Component<IndexPageProps, {}> {
const IndexPage: FC<IndexPageProps> = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <PageTemplate title={data.site?.siteMetadata?.title || ""}>
      {posts.map(post => {
        const id = post.node.id;
        const title = post.node.frontmatter?.title || "";
        const excerpt = post.node.excerpt;
        const path = post.node.frontmatter?.path || "/";
        const date = post.node.frontmatter?.date || "1900-01-01";
        const tags = post.node.frontmatter?.tags as Array<string>;

        return (
          <ArticleThumbnail
            key={id}
            className="mb-2"
            title={title}
            excerpt={excerpt}
            path={path}
            date={date}
            tags={tags}
          />
        );
      })}
    </PageTemplate>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
            date
            tags
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
