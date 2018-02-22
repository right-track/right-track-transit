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
   */
  constructor(id, name, description, iconPath) {

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
  
}

module.exports = RightTrackTransitAgency;
