import * as colors from '../dist/index.js';

import { LIGHT_SELECTOR } from './constants/selector.js';
import { convertFileName } from './utils/convertFileName.js';

import { doesNotIncludeSubstring } from './utils/doesNotIncludeSubstring.js';
import { genCssFile } from './utils/genCssFile.js';
import { genCssProperties } from './utils/genCssProperties.js';

Object.keys(colors)
  .filter((name) => doesNotIncludeSubstring(name, 'P3'))
  .forEach((color) => {
    const colorInfos = Object.entries(colors).find(([key, ,]) => key === color);
    const colorName = convertFileName(/Alpha$/, colorInfos?.[0] ?? '');
    const colorProps = genCssProperties(colorInfos?.[1] ?? undefined);

    if (!colorName) throw new Error('colorName이 존재하지 않습니다.');

    genCssFile(colorName, `${LIGHT_SELECTOR} { \n${colorProps}\n}\n`);
  });
