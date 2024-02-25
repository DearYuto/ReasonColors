import fs from 'fs';
import path from 'path';

import * as colors from '../dist/index.js';

const LIGHT_SELECTOR = ':root, .light, .light-theme';

/**
 *
 * @param {string} value
 */
const toLowerCase = (value) => {
  if (typeof value !== 'string') return value;

  return value.toLowerCase();
};

/**
 *
 * @param {string} value
 * @returns {string}
 */
const convertCssName = (value) => {
  const reformatPattern = /([a-z]+)(A)?(\d+)/;
  const match = value.match(reformatPattern);
  const hasOptional = match?.[2] ? true : false;

  if (hasOptional) {
    return `${toLowerCase(match[1])}-${toLowerCase(match[2])}-${toLowerCase(
      match[3]
    )}`;
  }

  return match ? `${toLowerCase(match[1])}-${toLowerCase(match[3])}` : value;
};

const convertFileName = (value) => {
  return value.replace(/Alpha$/, '-alpha');
};

/**
 *
 * @param { {key : string, value : string} } colors
 * @returns
 */
const genCssProperties = (colors) => {
  return Object.entries(colors)
    .map(([key, value]) => `--${convertCssName(key)}: ${value};`)
    .join('\n');
};

/**
 *
 * @param {string} name
 * @param {string} data
 */
const genCssFile = (name, data) => {
  fs.writeFileSync(path.join('..', `${name}.css`), data);
};

Object.keys(colors)
  .filter((name) => !name.includes('P3'))
  .forEach((color) => {
    const colorInfos = Object.entries(colors).find(([key, _]) => key === color);
    const colorName = convertFileName(colorInfos[0]);
    const colorProps = genCssProperties(colorInfos[1]);

    genCssFile(colorName, `${LIGHT_SELECTOR} { \n${colorProps}\n}\n`);
  });
