module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      'indent': ['error', 2], // Enforces 2 spaces
      '@typescript-eslint/indent': ['error', 2], // Enforces 2 spaces for TypeScript files
    },
  };