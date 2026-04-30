import { webLintStaged } from './apps/web/lint-staged.config.mjs'
import { apiLintStaged } from './apps/api/lint-staged.config.mjs'

export default {
  '**/*.md': ['prettier --write'],
  ...webLintStaged,
  ...apiLintStaged,
}
