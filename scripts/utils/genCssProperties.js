import { convertCssName } from './convertCssName.js';

/**
 *
 * @param { { [key : string], value?: string}  | undefined } colors
 * @returns
 */
export const genCssProperties = (colors) => {
  if (colors === undefined) return '';

  return Object.entries(colors)
    .map(([key, value]) => `--${convertCssName(key)}: ${value};`)
    .join('\n');
};
