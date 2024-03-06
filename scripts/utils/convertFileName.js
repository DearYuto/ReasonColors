import { SELECTOR_NAME } from '../constants/selector.js';

/**
 *
 * @param {RegExp} regexpToReplace
 * @param {string} baseName
 * @returns
 */
export const convertFileName = (regexpToReplace, baseName) => {
  if (baseName) return baseName.replace(regexpToReplace, `${SELECTOR_NAME.ALPHA}`);
};
