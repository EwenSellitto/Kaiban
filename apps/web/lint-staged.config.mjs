export const webLintStaged = {
  'apps/web/**/*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  'apps/web/**/*.{json,css}': ['prettier --write'],
}
