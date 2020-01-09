import React, { FC } from "react";
import PageTemplate from "../components/parts/PageTemplate";
import { graphql } from "gatsby";
import { IndexPageQuery } from "../../types/graphql-types";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: IndexPageQuery;
}

// export default class extends React.Component<IndexPageProps, {}> {
const IndexPage: FC<IndexPageProps> = props => {
  return (
    <PageTemplate title={props.data.site?.siteMetadata?.title || ""}>
      TOP
    </PageTemplate>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
