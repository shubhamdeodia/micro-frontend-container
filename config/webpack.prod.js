const { merge } = require('webpack-merge');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const config = require('../src/config.json')

const { MARKETING_URL } = config

const BUILD_DIR = path.resolve(__dirname, '../build');

const prodConfig = {
  mode: 'production',
  output: {
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
    filename: 'js/[name].[contenthash].bundle.js',
    path: BUILD_DIR,
    sourceMapFilename: 'js/[name].[contenthash].bundle.map',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${MARKETING_URL}/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
