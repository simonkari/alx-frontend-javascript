/**
 * Represents a currency with a code and name.
 */
export default class Currency {
  /**
   * Creates a new instance of the Currency class with the specified code and name.
   *
   * @param {string} code - The code representing the currency (e.g., USD).
   * @param {string} name - The name of the currency (e.g., US Dollar).
   */
  constructor(code, name) {
    /**
     * The code representing the currency.
     * @type {string}
     * @private
     */
    this.code = code;

    /**
     * The name of the currency.
     * @type {string}
     * @private
     */
    this.name = name;
  }

  /**
   * Gets the code representing the currency.
   * @returns {string} The code of the currency.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the code representing the currency.
   * 
   * The code to set for the currency.
   * @param {string} value
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Gets the name of the currency.
   * The name of the currency.
   * @returns {string}
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the currency.
   * The name to set for the currency.
   * @param {string} value
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Displays the full currency information, including the
   * name in parentheses.
   * The full currency information (e.g., "US Dollar (USD)").
   * @returns {string}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
