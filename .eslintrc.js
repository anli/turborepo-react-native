module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  parserOptions: {
    project: './tsconfig.base.json',
    tsconfigRootDir: __dirname,
  },
  extends: ['plugin:prettier/recommended'],
}
