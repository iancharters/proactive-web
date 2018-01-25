// =============================================================================
// Import modules.
// =============================================================================
const merge = require('webpack-merge');

// =============================================================================
// Import plugins.
// =============================================================================
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// =============================================================================
// Import config.
// =============================================================================
const common = require('./webpack.common.js');

// Combines the common webpack config with extra production env settings.
module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({
      parallel: true,
    }),
  ],
});
