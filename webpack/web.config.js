const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const serve = require('koa-static');
const rewrite = require('koa-rewrite');
const baseConfig = require('./base.config.js');

const isProdBuild = process.argv.indexOf('-p') !== -1;

const templatePlugin = new HtmlWebpackPlugin({
  template      : './src/template.html',
  hash          : false,
  filename      : 'template.html',
  inject        : 'body',
  minify   : {
    collapseWhitespace : true
  },
});

const config = {
  ...baseConfig,
  entry: {
    'assets/app': './src/entryWeb.js',
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.join(__dirname, '../app'),
    publicPath: isProdBuild ? '/' : 'http://localhost:8888/' // Required for webpack-serve
  },
  plugins: [
    ...baseConfig.plugins,
    templatePlugin,
  ],
};

if(!isProdBuild) {
  config.devtool = 'inline-source-map';
  config.devServer = {
    port: '8888',
    index: 'template.html',
    contentBase: 'static',
    proxy: {
      '**/': {
        target: 'http://localhost:8888',
        pathRewrite: {'.*': 'template.html'},
      }
    },
  }
}

module.exports = config;
