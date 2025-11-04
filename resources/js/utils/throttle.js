/**
 * Throttle function to limit how often a function can be called
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} - The throttled function
 */
export const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    
    if (!lastRan) {
      // First time execution - run immediately
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      // Clear previous scheduled execution
      clearTimeout(lastFunc);
      
      // Schedule a new execution
      lastFunc = setTimeout(function() {
        // Only run if enough time has passed since last execution
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};
