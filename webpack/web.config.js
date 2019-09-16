const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const serve = require('koa-static');
const rewrite = require('koa-rewrite');
const baseConfig = require('./base.config');
const getContent = require('../getContent');

const isProdBuild = process.argv.indexOf('-p') !== -1;

const content = isProdBuild ? null : getContent();

const templatePlugin = new HtmlWebpackPlugin({
  template      : './static/pageTemplate.html',
  hash          : false,
  filename      : 'pageTemplate.html',
  inject        : 'body',
  minify   : {
    collapseWhitespace : true
  },
  inlineSource: '.css$',
  content,
});

const inlinePlugin = new HtmlWebpackInlineSourcePlugin();

const config = {
  ...baseConfig,
  entry: {
    'assets/app': './src/entryWeb.js',
  },
  externals: {
    'content': 'window.__content__',
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.join(__dirname, '../app'),
    publicPath: isProdBuild ? '/' : 'http://localhost:8888/' // Required for webpack-serve
  },
  plugins: [
    ...baseConfig.plugins,
    templatePlugin,
    inlinePlugin,
  ],
};

const swConfig = {
  ...baseConfig,
  entry: {
    'serviceWorker': './src/serviceWorker.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../app'),
    publicPath: isProdBuild ? '/' : 'http://localhost:8888/' // Required for webpack-serve
  },
}

if(!isProdBuild) {
  config.devtool = 'inline-source-map';
  config.devServer = {
    port: '8888',
    index: 'pageTemplate.html',
    contentBase: 'static',
    proxy: {
      '**/': {
        target: 'http://localhost:8888',
        pathRewrite: {'.*': 'pageTemplate.html'},
      }
    },
  }

  swConfig.devtool = 'inline-source-map';

}

module.exports = [config, swConfig];
