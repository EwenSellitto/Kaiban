//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

import { sharedEslintIgnores, sharedEslintPlugins, sharedEslintRules } from '../../eslint.config.mjs'

export default [
  ...tanstackConfig,
  {
    ignores: [...sharedEslintIgnores, 'prettier.config.js', 'lint-staged.config.mjs', 'src/components/ui/**'],
  },
  {
    plugins: sharedEslintPlugins,
    rules: {
      ...sharedEslintRules,
      'pnpm/json-enforce-catalog': 'off',
      'import/consistent-type-specifier-style': 'off',
    },
  },
]
