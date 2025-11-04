/**
 * Utility function to detect if the page has been scrolled past a certain threshold
 * @param {number} threshold - The scroll threshold in pixels
 * @returns {boolean} - Whether the page has been scrolled past the threshold
 */
export const isScrolled = (threshold = 10) => {
  if (typeof window !== 'undefined') {
    return window.scrollY > threshold;
  }
  return false;
};
