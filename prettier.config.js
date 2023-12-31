module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  importOrder: [
    '^react$',
    '^react-admin',
    '^@mui/material$',
    '^@mui/icons-material/(.*)$',
    '^@mui/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/features/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
