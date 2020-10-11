const baseBuildConfig = require('./webpack.base.js');
const merge = require('webpack-merge');

const prodConfig = merge(baseBuildConfig, {
  mode: 'production',
});

module.exports = prodConfig;