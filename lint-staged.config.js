/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildPrettierCommand = (filenames) =>
  `pnpm format --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const lintStagedConfig = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
};

module.exports = lintStagedConfig;
