const path = require('path');

const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.js');

module.exports = merge(
  baseConfig,
  {
    devtool: 'source-map',
    devServer: {
      contentBase: [path.join(__dirname)],
      port: 9000,
      // contentBase中的内容发生变化时也刷新浏览器
      watchContentBase: true
    }

  }
);