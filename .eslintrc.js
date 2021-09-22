module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended'
  ],

  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/react-in-jsx-scope': 'off', // new React 17 doesn't require this
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          {
            char: "'",
            alternatives: ['&apos;']
          }
        ]
      }
    ],
    'react/prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
