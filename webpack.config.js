const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  context: `${__dirname}/client/src`,
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
        },
      },
    ],
  },
  output: {
    path: `${__dirname}/client/dist`,
    filename: 'bundle.js',
  },
};
