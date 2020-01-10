"use strict";

require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "esnext"
  }
});

exports.onCreateWebpackConfig = ({ getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig();
  config.node = {
    fs: "empty"
  };
};

exports.createPages = require("./gatsby-node/index.ts").createPages;
