const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const webpackConfig  = withModuleFederationPlugin({
  filename: "remoteEntry.js",
  remotes: {
    "insurance": "http://localhost:4200/insurance/remoteEntry.js",
    "premium": "http://localhost:4200/premium/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  

});

module.exports = {
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    scriptType: 'text/javascript',
    uniqueName: 'remote',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  }
};
