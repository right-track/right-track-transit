'use strict';

/**
 * Transit Feed Line
 * ----------------
 * A single Line contained in a real-time Transit Division.
 *
 * The Transit Line contains the list of Events that have occurred on the Line.
 *
 * @class
 * @alias TransitLine
 */
class TransitLine {

  /**
   * Create a new Transit Line
   * @param {string} code Line Code
   * @param {string} name Line Name
   * @param {string} [backgroundColor] Line background color (hex rrggbb)
   * @param {string} [textColor] Line text color (hex rrggbb)
   */
  constructor(code, name, backgroundColor, textColor) {

    /**
     * Transit Line Code
     * @type {string}
     */
    this.code = code;

    /**
     * Transit Line Display Name
     * @type {string}
     */
    this.name = name;

    /**
     * Transit Line Background Color
     * @type {string}
     * @default ffffff
     */
    this.backgroundColor = backgroundColor !== undefined ? backgroundColor : "ffffff";

    /**
     * Transit Line Text Color
     * @type {string}
     * @default 000000
     */
    this.textColor = textColor !== undefined ? textColor : "000000";

    /**
     * Transit Line Status
     * @type {string}
     * @default undefined
     */
    this.status = undefined;

    /**
     * List of Transit Events for this Line
     * @type {TransitEvent[]}
     */
    this.events = [];

  }

  /**
   * Get the number of Transit Events for this Line
   * @returns {number}
   */
  getEventCount() {
    return this.events.length;
  }

}


module.exports = TransitLine;
