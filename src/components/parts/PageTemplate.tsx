import React, { FC } from "react";
import Footer from "./Footer";

const PageTemplate: FC<React.Props<{}>> = props => {
  return (
    <>
      {props.children}
      <Footer />
    </>
  );
};

export default PageTemplate;
