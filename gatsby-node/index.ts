import { GatsbyNode } from "gatsby";
import { MdxConnection } from "../types/graphql-types";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
  reporter
}) => {
  type GQLResponse = {
    allMdx: MdxConnection;
  };

  const res = await graphql<GQLResponse>(`
    {
      allMdx(sort: { fields: frontmatter___date, order: ASC }) {
        edges {
          next {
            frontmatter {
              path
              title
            }
          }
          previous {
            frontmatter {
              path
              title
            }
          }
          node {
            id
            body
            tableOfContents(maxDepth: 10)
            excerpt
            frontmatter {
              date
              description
              keywords
              path
              status
              tags
              title
            }
          }
        }
      }
    }
  `);

  if (res.errors) {
    reporter.panicOnBuild(res.errors);
    return;
  }
  if (!res.data) return;
  const data = res.data;

  data.allMdx.edges.forEach(post => {
    if (!post.node.frontmatter) {
      throw new Error("Cannot find frontmatter.");
    }
    if (!post.node.frontmatter.path) {
      throw new Error("Cannot find frontmatter.path.");
    }
    createPage({
      path: `/post/${post.node.frontmatter.path}`,
      component: path.resolve(
        __dirname,
        "../src/components/container/BlogTemplateContainer.tsx"
      ),
      context: { post, id: post.node.id }
    });
  });
};
