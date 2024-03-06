import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootPath = join(__dirname, '..', '..');

/**
 *
 * @param {string} name
 * @param {string} data
 */
export const genCssFile = (name, data) => {
  fs.writeFileSync(join(rootPath, `${name}.css`), data);
};
