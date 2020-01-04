import React, { FC } from "react";
import PageTemplate from "./PageTemplate";

const BlogTemplate: FC<React.Props<{}>> = props => {
  return (
    <PageTemplate>
      <article className="p-2">{props.children}</article>
    </PageTemplate>
  );
};

export default BlogTemplate;
