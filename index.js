module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'react',
  ],
  'parser': 'babel-eslint',
  'rules': {
    'new-cap': ['error', {
      'capIsNewExceptions': ['Map', 'Set', 'List', 'Promise'],
    }],
    'max-len': ['error', { 'code': 120, 'tabWidth': 2, 'ignoreComments': true }],
    'quote-props': ['error', 'always'],
  },
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
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
