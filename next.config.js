const webpack = require("webpack");

module.exports = {
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /winston|ServerClient|jsdom|body-parser/,
      })
    );

    return config;
  },
};
