// DeferWork.js

/**
 * Defers the execution of a function based on the availability of certain APIs.
 * @param {Function} fn - The function to be deferred.
 * @returns {boolean} - Returns true once the function is deferred.
 */
export const deferWork = (fn) => {
  if (typeof requestIdleCallback !== 'undefined') {
    window.requestIdleCallback(fn, { timeout: 60 });
  } else if (typeof requestAnimationFrame !== 'undefined') {
    window.requestAnimationFrame(fn);
  } else {
    window.setTimeout(fn, 16.66);
  }

  return true;
};
