import React, { FC } from "react";
import Helmet from "react-helmet";

type HelmentProviderProps = {
  title: string;
  description?: string;
  keywords?: Array<string>;
};

const HelmentProvider: FC<HelmentProviderProps> = props => {
  return (
    <Helmet
      title={props.title}
      meta={[
        { name: "description", content: props.description || "" },
        { name: "keywords", content: props.keywords?.join(", ") || "" }
      ]}
    >
      {props.children}
    </Helmet>
  );
};

export default HelmentProvider;
