const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
   webpackFinal: async (config) => {
      if (!config.resolve) config.resolve = {};
      config.resolve.alias = {
         ...config.resolve.alias,
         "~": path.join(__dirname, "..", "src"),
      };

      return config;
   }
}