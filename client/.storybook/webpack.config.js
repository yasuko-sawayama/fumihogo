const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: [
      path.resolve(__dirname, "../"),
      path.resolve(__dirname, "../../app/assets/stylesheets")
    ]
  });

  // Return the altered config
  return storybookBaseConfig;
};