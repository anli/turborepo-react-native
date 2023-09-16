module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest.setup.ts',
    '<rootDir>/src/shared/utils-testing/request-mocks/jest.setup.ts',
  ],
  moduleNameMapper: {
    '\\.(png|jpg|ico|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/image-mock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-native|@react-navigation|@sentry/react-native)',
  ],
}
