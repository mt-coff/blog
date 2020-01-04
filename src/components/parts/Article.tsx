import { Components } from "@mdx-js/react";
import React from "react";

const Article: Components = {
  h1: (props: any) => <h1 className="text-3xl font-semibold" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold" {...props} />,
  h4: (props: any) => <h4 className="text-lg font-semibold" {...props} />,
  h5: (props: any) => <h5 className="text-base font-semibold" {...props} />,
  h6: (props: any) => <h6 className="text-sm font-semibold" {...props} />
};

export default Article;
