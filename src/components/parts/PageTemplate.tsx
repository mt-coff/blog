import React, { FC } from "react";
import { Global, css } from "@emotion/core";
import Footer from "./Footer";
import Header from "./Header";
import tw from "tailwind.macro";
import styled from "@emotion/styled";
import HelmentProvider from "../provider/HelmetProvider";

const globalStyle = css`
  html {
    ${tw`h-screen`}
  }
  body,
  #___gatsby {
    ${tw`h-full`}
    & > div {
      ${tw`h-full flex flex-col`}
    }
  }
  .header-link > svg {
    ${tw`inline-block mr-1`}
  }
`;

const Main = styled.main`
  flex-grow: 1;
  ${tw`mx-auto w-11/12 tablet:w-10/12 desktop:w-8/12`}
`;

type PageTemplateProps = {
  title: string;
  meta?: {
    description?: string;
    keywords?: Array<string>;
  };
};

const PageTemplate: FC<PageTemplateProps> = props => {
  return (
    <>
      <HelmentProvider
        title={props.title}
        description={props.meta?.description}
        keywords={props.meta?.keywords}
      />
      <Global styles={globalStyle} />
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
};

export default PageTemplate;
