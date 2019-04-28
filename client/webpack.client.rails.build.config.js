// Run like this:
// cd client && yarn run build:client
// Note that Foreman (Procfile.dev) has also been configured to take care of this.

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const merge = require("webpack-merge");
const { env } = require("process");
const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Webpacker specific
const webpackConfigLoader = require("react-on-rails/webpackConfigLoader");
const config = require("./webpack.client.base.config");

const configPath = resolve("..", "config");
const { output, settings } = webpackConfigLoader(configPath);
const isHMR = settings.dev_server && settings.dev_server.hmr;

const devBuild = env.NODE_ENV !== "production";

if (devBuild) {
  console.log("Webpack dev build for Rails"); // eslint-disable-line no-console
  config.devtool = "eval-source-map";
} else {
  console.log("Webpack production build for Rails"); // eslint-disable-line no-console
}

module.exports = merge(config, {
  mode: "production",

  output: {
    filename: isHMR ? "[name]-[hash].js" : "[name]-[chunkhash].js",
    chunkFilename: "[name]-[chunkhash].chunk.js",

    publicPath: output.publicPath,
    path: output.path,
    pathinfo: devBuild
  },

  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    redux: "Redux"
  },

  optimization: {
    sideEffects: true
  },

  // See webpack.client.base.config for adding modules common to both the webpack
  // dev server and rails

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
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
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          {
            loader: "scss-loader",
            options: {
              minimize: true,
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
          { loader: "sass-loader" },
          {
            loader: "sass-resources-loader",
            options: {
              resources: "./app/assets/styles/app-variables.scss"
            }
          }
        ]
      },
      {
        test: require.resolve("react"),
        use: {
          loader: "imports-loader",
          options: {
            shim: "es5-shim/es5-shim",
            sham: "es5-shim/es5-sham"
          }
        }
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
  },

  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false,
      reportFilename: "bundle_sizes.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name]-[hash].css",
      chunkFilename: "[name]-[hash].css"
    })
  ]
});
