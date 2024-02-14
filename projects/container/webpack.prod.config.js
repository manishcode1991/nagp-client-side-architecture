module.exports = require('./webpack.config');


const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const webpackConfig  = withModuleFederationPlugin({
  filename: "remoteEntry.js",
  remotes: {
    "insurance": "https://client-architecture.netlify.app/insurance/remoteEntry.js",
    "premium": "https://client-architecture.netlify.app/premium/remoteEntry.js",
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

