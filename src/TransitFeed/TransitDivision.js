'use strict';

/**
 * Transit Feed Division
 * ----------------
 * A single Division contained in a real-time Transit Feed.
 *
 * The Transit Division contains the list of Lines that belong to the Division
 *
 * @class
 * @alias TransitDivision
 */
class TransitDivision {

  /**
   * Create a new Transit Division
   * @param {string} code Division Code
   * @param {string} name Division Name
   * @param {string} [iconPath] Local file path to Division icon
   */
  constructor(code, name, iconPath) {

    /**
     * Transit Division Code
     * @type {string}
     */
    this.code = code;

    /**
     * Transit Division Display Name
     * @type {string}
     */
    this.name = name;

    /**
     * Transit Division Icon File Path
     * @type {string}
     */
    this.iconPath = iconPath;

    /**
     * List of Transit Lines for this Division
     * @type {TransitLine[]}
     */
    this.lines = [];

  }

  /**
   * Get the number of Transit Events for this Division
   * @returns {number}
   */
  getEventCount() {
    let count = 0;
    for ( let i = 0; i < this.lines.length; i++ ) {
      count += this.lines[i].getEventCount();
    }
    return count;
  }

}


module.exports = TransitDivision;
