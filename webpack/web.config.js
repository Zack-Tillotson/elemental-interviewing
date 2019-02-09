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
  module: {
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ]
  }
  plugins: [
    ...baseConfig.plugins,
    templatePlugin,
  ],
};

if(!isProdBuild) {
  config.serve = {
    content: "./app",
    add: function(app, middleware, options) {
      // since we're manipulating the order of middleware added, we need to handle
      // adding these two internal middleware functions.
      middleware.webpack();
      middleware.content();

      app.use(serve('./app'));
    }
  }
}

module.exports = config;
