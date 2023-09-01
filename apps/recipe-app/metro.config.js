const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {resolve} = require('path');
const rootPaths = [resolve(__dirname), resolve(__dirname, '../..')];
const nodeModulesPaths = rootPaths.map(rootPath =>
  resolve(rootPath, 'node_modules'),
);

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders: rootPaths,
  resolver: {
    nodeModulesPaths: nodeModulesPaths,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
