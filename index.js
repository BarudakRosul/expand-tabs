require("@barudakrosul/split-lines");

/**
 * Expands tab characters in the string to the specified number of spaces.
 *
 * @param {number} tabsize - The number of spaces to replace each tab character (default: 8).
 * @returns {string} - The string with tabs replaced by spaces.
 */
String.prototype.expandTabs = function(tabsize = 8) {
  return this.splitLines(true).map(line => {
    let result = "";
    let pos = 0;

    for (let char of line) {
      if (char === "\t") {
        let spaces = tabsize - (pos % tabsize);
        result += " ".repeat(spaces);
        pos += spaces;
      } else {
        result += char;
        pos++;
      }
    }

    return result;
  }).join("");
};
