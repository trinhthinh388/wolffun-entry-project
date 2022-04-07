import _ from 'lodash';

/**
 * mergeClassname is a function which returns the valid class value from the provided className. (All the falsy values will be ignored)
 * @param args
 * @returns {string}
 */
export function mergeClassname(...args: (string | undefined | boolean)[]) {
  return _.compact([...args])
    .join(' ')
    .trim();
}
