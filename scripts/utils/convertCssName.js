import { REG_EXP } from '../constants/format.js';
import { toLowerCase } from './toLowerCase.js';

/**
 *
 * @param {string} value
 * @returns {string}
 */
export const convertCssName = (value) => {
  const reformatPattern = REG_EXP.reformatPattern;
  const match = value.match(reformatPattern);
  const hasOptional = match?.[2] ? true : false;

  if (hasOptional) {
    return `${toLowerCase(match[1])}-${toLowerCase(match[2])}-${toLowerCase(match[3])}`;
  }

  return match ? `${toLowerCase(match[1])}-${toLowerCase(match[3])}` : value;
};
