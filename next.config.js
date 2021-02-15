const webpack = require("webpack");

module.exports = {
  webpack: (config, { isServer }) => {
    config.resolve.extensions = [".ts", ".tsx", ".js", ".json", ".mjs"];
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /winston|ServerClient|jsdom|body-parser/,
      })
    );
    // Temporary fix https://github.com/Shopify/quilt/issues/1722#issuecomment-762485321
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    return config;
  },
};
