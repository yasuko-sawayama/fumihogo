// Common client-side webpack configuration used by
// webpack.client.rails.hot.config and webpack.client.rails.build.config.

const webpack = require("webpack");
const ManifestPlugin = require("webpack-manifest-plugin");
const { resolve, join } = require("path");

const { assetLoaderRules } = require("./webpack.common.config");

const webpackConfigLoader = require("react-on-rails/webpackConfigLoader");

const configPath = resolve("..", "config");
const { output } = webpackConfigLoader(configPath);

const devBuild = process.env.NODE_ENV !== "production";

module.exports = {
  // the project dir
  context: resolve(__dirname),
  entry: {
    // This will contain the app entry points defined by
    // webpack.client.rails.hot.config and webpack.client.rails.build.config
    "app-bundle": ["./app/startup/clientRegistration"]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      images: join(process.cwd(), "app", "assets", "images")
    }
  },

  optimization: {
    splitChunks: {
      name: 'vendor-bundle',
      chunks: 'initial',
    }
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new webpack.DefinePlugin({
      TRACE_TURBOLINKS: devBuild
    }),
    new ManifestPlugin({
      publicPath: output.publicPath,
      writeToFileEmit: true
    })
  ],

  module: {
    rules: [
      ...assetLoaderRules,

      // {
      //     test: require.resolve('jquery'),
      //     use: [
      //         {
      //             loader: 'expose-loader',
      //             options: 'jQuery',
      //         },
      //     ],
      // },
    ]
  }
};
