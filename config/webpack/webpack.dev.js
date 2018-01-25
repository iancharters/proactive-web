const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(common, {
  devServer: {
    port: 3000,
    inline: true,
    contentBase: './build',
    historyApiFallback: true,
    host: '0.0.0.0',
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new DashboardPlugin(),
  ],
});
