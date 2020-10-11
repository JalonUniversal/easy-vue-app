const baseBuildConfig = require('./webpack.base.js');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

const devConfig = merge(baseBuildConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    port: 3000,
    open: true,
    quiet: true,
    compress: true,
    contentBase: path.resolve(__dirname, '../public')
  }
});

module.exports = devConfig;
