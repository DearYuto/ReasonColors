/**
 * @param {string} text
 * @param {string} substring
 */
export const doesNotIncludeSubstring = (text, substring) => {
  return !text.includes(substring);
};
