'use strict';


/**
 * ### `RightTrackTransitAgency` Abstract Class
 *
 * @class
 * @abstract
 */
class RightTrackTransitAgency {

  /**
   * Create a new Transit Agency
   * @param {string} id Transit Agency ID
   * @param {string} name Transit Agency Name
   * @param {string} description Transit Agency Description
   * @param {string} [iconPath] Local file path to Transit Agency Icon
   * @param {Object} [maintainer] Transit Agency Maintainer Information
   * @param {string} [maintainer.name] Maintainer Name
   * @param {string} [maintainer.email] Maintainer Email Address
   * @param {string} [maintainer.source] Maintainer's project source address
   */
  constructor(id, name, description, iconPath, maintainer) {

    /**
     * Transit Agency ID Code
     * @type {string}
     */
    this.id = id;

    /**
     * Transit Agency Display Name
     * @type {string}
     */
    this.name = name;

    /**
     * Transit Agency Description
     * @type {string}
     */
    this.description = description;

    /**
     * Local file path to Transit Agency Icon
     * @type {string}
     */
    this.iconPath = iconPath;

    /**
     * Transit Agency Maintainer Information
     * @type {object}
     * @property {string} name Maintainer Name
     * @property {string} email Maintainer Email Address
     * @property {string} source Maintainer's project source address
     */
    this.maintainer = maintainer;

  }

  /**
   * Load the Transit Feed for this Transit Agency
   * @param {function} callback Callback function
   * @param {Error} callback.error Transit Feed Error.  The Error's message will be
   * a pipe (`|`) separated string in the format of: `Error Code|Error Type|Error Message`
   * that will be parsed out by the **Right Track API Server** into a more specific
   * error Response.
   * @param {TransitFeed} [callback.feed] The built `TransitFeed` for the Transit Agency
   * @abstract
   */
  loadFeed(callback) {
    return callback(new Error("4052|Transit Feed Not Supported|This transit agency (" + this.name + ") does not support real-time Transit Feeds"));
  }

  /**
   * Get the local file path to the icon for the specified Transit Division
   * @param {string} division Transit Division Code
   * @returns {string|undefined} Absolute local path to division icon
   * @abstract
   */
  getDivisionIconPath(division) {
    return undefined;
  }

  /**
   * Get the background color for the specified Transit Line
   * @param {string} line Transit Line Code
   * @returns {string} background color (#rrggbb)
   * @abstract
   */
  getLineBackgroundColor(line) {
    return "#3d3d3d";
  }

  /**
   * Get the text color for the specified Transit Line
   * @param line
   * @returns {string} text color (#rrggbb)
   * @abstract
   */
  getLineTextColor(line) {
    return "#e7e7e7";
  }
  
}

module.exports = RightTrackTransitAgency;
