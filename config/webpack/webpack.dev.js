const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

const DashboardPlugin = require('webpack-dashboard/plugin');

// Combines the common webpack config with extra development env settings.

module.exports = merge(common, {
  devServer: {
    port: 3000,
    inline: true,
    contentBase: './build',
    historyApiFallback: true,
    host: '0.0.0.0',
  },

  devtool: 'source-map',

  plugins: [
    new DashboardPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});
