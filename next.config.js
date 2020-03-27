
const withCSS = require("@zeit/next-css");
const withSass = require('@zeit/next-sass');

module.exports = withCSS(
  withSass({
    webpack(config, options) {
      return config;
    }
  })
);