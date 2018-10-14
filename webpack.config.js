// @flow

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'app'),
    },
  },
  module: {
    rules: [{ test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/templates/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
};
