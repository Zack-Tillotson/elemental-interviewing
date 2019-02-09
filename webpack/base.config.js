const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProdBuild = process.argv.indexOf('-p') !== -1;

const envPlugin = new webpack.DefinePlugin({
  __DEBUG__: JSON.stringify(!isProdBuild),
  __RELEASE__: JSON.stringify(isProdBuild),
  'process.env.NODE_ENV': isProdBuild ? '"production"' : '"development"'
});

const config = {
  mode: isProdBuild ? 'production' : 'development',
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx', '.scss']
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
    ]
  },
  plugins: [
    envPlugin,
  ],
};

module.exports = config;
