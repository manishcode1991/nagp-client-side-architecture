const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const webpackConfig  = withModuleFederationPlugin({
  filename: "remoteEntry.js",
  remotes: {
    "insurance": "http://localhost:4300/remoteEntry.js",
    "premium": "http://localhost:4400/remoteEntry.js",
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
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  },

optimization: {
    runtimeChunk: false,
},
};
