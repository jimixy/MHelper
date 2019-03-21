module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-promise-reject-errors': 'off',
    "space-before-function-paren": 'off'
  },
  globals: {
    'wx': true,
    'getApp': true,
    'App': true,
    'getCurrentPages': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
