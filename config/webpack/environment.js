const { environment } = require("@rails/webpacker");
const webpack = require("webpack");

// Get a pre-configured plugin
// const manifestPlugin = environment.plugins.get("Manifest");
// manifestPlugin.opts.writeToFileEmit = false;

 environment.plugins.prepend(
  "Provide",
  new webpack.ProvidePlugin({
    // ActionCable: "actioncable",
    BabelPluginStyledComponents: "babel-plugin-styled-components"
  })
);

module.exports = environment;
