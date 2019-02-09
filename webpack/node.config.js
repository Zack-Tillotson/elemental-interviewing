const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./base.config.js');

const isProdBuild = process.argv.indexOf('-p') !== -1;

const config = {
  ...baseConfig,
  mode: 'development',
  target: 'node',
  entry: {
    'build': './src/entryNode.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../app'),
  },
  module: {
    rules: [
      ...baseConfig.module.rules,
      {
        test: /\.scss$/,
        use: 'null-loader',
      },
    ]
  }
};

module.exports = config;
