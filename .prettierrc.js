module.exports = {
  importOrder: [
    "^(?:@[^/].*|[^@.].*)", // not starting with "." or "@/" (external packages)
    "^@/.*", // starting with "@/" (internal aliases)
    "^[.]+.*", // starting with "." (relative imports)
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
