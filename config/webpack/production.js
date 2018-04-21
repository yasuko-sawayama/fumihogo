const environment = require('./environment')
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//config
const config = {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production'
    }),
    new UglifyJSPlugin({
      // sourceMap: true,
      uglifyOptions: {
        ecma: 6,
        warnings: false,
        compress: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
    new webpack.optimize.DedupePlugin()
    new BundleAnalyzerPlugin(),
  ],
}

environment.config.merge(config);
module.exports = environment.toWebpackConfig();
