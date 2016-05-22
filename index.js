module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'react',
  ],
  'parser': 'babel-eslint',
  'rules': {
    'new-cap': ['error', {
      'capIsNewExceptions': ['Map', 'Set', 'List', 'Promise', 'express.Router'],
    }],
    'max-len': ['error', { 'code': 120, 'tabWidth': 2, 'ignoreComments': true }],
    'quote-props': ['error', 'consistent-as-needed'],
    "prefer-arrow-callback": ["error", { "allowNamedFunctions": true }],
  },
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'mocha': true,
  },
  'parserOptions': {
    'ecmaFeatures': {
      'ecmaVersion': 6,
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
    'sourceType': 'module',
  },
};
