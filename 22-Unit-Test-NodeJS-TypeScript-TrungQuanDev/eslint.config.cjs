const js = require('@eslint/js')
const tseslint = require('typescript-eslint')
const importPlugin = require('eslint-plugin-import')
const prettier = require('eslint-config-prettier')

/** @type {import('eslint').FlatConfig.ConfigArray} */
module.exports = [
  { ignores: ['eslint.config.*', 'dist/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended, // chỉ để lấy rule import/order
  prettier,

  // Quy tắc áp dụng cho TS
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        // KHÔNG cần project ở đây nếu không dùng type-checked rules
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      // Giữ sắp xếp import cho đẹp
      'import/order': [
        'error',
        { 'newlines-between': 'always', alphabetize: { order: 'asc' } },
      ],
      // TẮT các rule dễ xung đột với TS resolver
      'import/no-unresolved': 'off',
      'import/named': 'off',
      'import/extensions': 'off',
    },
  },
]
