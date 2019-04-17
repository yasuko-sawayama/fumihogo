// Run with Rails server like this:
// rails s
// cd client && babel-node server-rails-hot.js
// Note that Foreman (Procfile.dev) has also been configured to take care of this.

// require() is used rather than import because hot reloading with webpack
// requires webpack to transform modules from ES6 to ES5 instead of babel
// and webpack can not transform its own config files.
const { resolve } = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const config = require("./webpack.client.base.config");
const webpackConfigLoader = require("react-on-rails/webpackConfigLoader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const configPath = resolve("..", "config");
const { output, settings } = webpackConfigLoader(configPath);

// entry is prepended because 'react-hot-loader/patch' must be the very first entry
// for hot reloading to work.
module.exports = merge.strategy({
  mode: "development",
  entry: "prepend"
})(config, {
  devtool: "eval-source-map",

  entry: {
    "vendor-bundle": ["react-on-rails"],
    "app-bundle": [
      "react-hot-loader/patch",
      `webpack-dev-server/client?http://${settings.dev_server.host}:${
        settings.dev_server.port
      }`,
      "webpack/hot/only-dev-server"
    ]
  },

  output: {
    filename: "[name].js",
    path: output.path,
    publicPath: output.publicPath
  },

  // webpack.NamedModulesPlugin() is an optional module that is great for HMR debugging
  // since it transform module IDs (112, 698, etc...) into their respective paths,
  // but it can conflict with other libraries that expect global references.
  // When in doubt, throw it out.

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
      path: output.path,
      publicPath: output.publicPath
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]__[hash:base64:5]",
              hmr: true
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 3,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: "autoprefixer"
            }
          },
          {
            loader: "sass-loader"
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: "./app/assets/styles/app-variables.scss"
            }
          }
        ],
        exclude: /node_modules/
      }
      // {
      //   test: require.resolve("jquery-ujs"),
      //   use: {
      //     loader: "imports-loader",
      //     options: {
      //       jQuery: "jquery"
      //     }
      //   }
      // }
    ]
  }
});

console.log("Webpack HOT dev build for Rails"); // eslint-disable-line no-console
