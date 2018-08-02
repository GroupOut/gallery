const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  context: `${__dirname}/client/src`,
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      },
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
