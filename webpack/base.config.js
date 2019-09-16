const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProdBuild = process.argv.indexOf('-p') !== -1;

const envPlugin = new webpack.DefinePlugin({
  __DEBUG__: JSON.stringify(!isProdBuild),
  __RELEASE__: JSON.stringify(isProdBuild),
  'process.env.NODE_ENV': isProdBuild ? '"production"' : '"development"'
});

let cssLoader = isProdBuild ? {
  loader: MiniCssExtractPlugin.loader,
} : {
  loader: 'style-loader'
};

const config = {
  mode: isProdBuild ? 'production' : 'development',
  resolve: {
    modules: ['node_modules', './src', './static'],
    extensions: ['.js', '.jsx', '.scss', '.json']
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          cssLoader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ]
  },
  plugins: [
    envPlugin,
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
  ],
};

module.exports = config;
