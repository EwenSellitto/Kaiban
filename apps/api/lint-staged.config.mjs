export const apiLintStaged = {
  'apps/api/**/*.{js,ts,mjs}': ['eslint --fix', 'prettier --write'],
  'apps/api/**/*.{json,md}': ['prettier --write'],
}
