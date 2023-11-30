/**
 * Represents an airport with a name and code.
 */
export default class Airport {
  /**
   * Creates a new instance of the Airport class
   * with the specified name and code.
   *
   * The name of the airport.
   * @param {string} name
   * The code representing the airport (e.g., IATA code).
   * @param {string} code
   */
  constructor(name, code) {
    /**
     * The name of the airport.
     * @type {string}
     * @private
     */
    this._name = name;

    /**
     * The code representing the airport (e.g., IATA code).
     * @type {string}
     * @private
     */
    this._code = code;
  }
}

/**
 * Overrides the default toString method for Airport instances.
 * Returns a string representation of the Airport object.
 *
 * @returns {string} A string representation of the Airport
 * object, including the airport code.
 */
Airport.prototype.toString = function airportToString() {
  return `[object ${this._code}]`;
};
