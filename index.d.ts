/**
 * Expands tab characters in the string to the specified number of spaces.
 *
 * @param {number} tabsize - The number of spaces to replace each tab character (default: 8).
 * @returns {string} - The string with tabs replaced by spaces.
 */
interface String {
  expandTabs(tabsize?: number): string;
}
