/**
 *
 * @param {string} value
 */
export const toLowerCase = (value) => {
  if (typeof value !== 'string') return value;

  return value.toLowerCase();
};
