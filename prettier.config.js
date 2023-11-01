module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  importOrder: [
    '^@core/(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@server/(.*)$',
    '^@ui/(.*)$',
    '^@fetures/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
