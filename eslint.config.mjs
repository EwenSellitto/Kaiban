import simpleImportSort from 'eslint-plugin-simple-import-sort'

export const sharedEslintPlugins = {
  'simple-import-sort': simpleImportSort,
}

export const sharedEslintRules = {
  'import/no-cycle': 'off',
  'import/order': 'off',
  'sort-imports': 'off',
  '@typescript-eslint/array-type': 'off',
  '@typescript-eslint/require-await': 'off',
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
}

export const sharedEslintIgnores = ['dist', 'node_modules']
