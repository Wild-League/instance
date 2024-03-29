module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.html'],
  parser: '@typescript-eslint/parser',
  // rules: {
  //   'react-refresh/only-export-components': [
  //     'off',
  //     { allowExportNames: ["meta", "links", "headers", "loader", "action"] },
  //   ],
  // },
}
