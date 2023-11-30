/**
 * Represents a Holberton class with a size and location.
 */
export default class HolbertonClass {
  /**
   * Creates a new instance of the HolbertonClass
   * class with the specified size and location.
   *
   * The size or capacity of the Holberton class.
   * @param {number} size
   * The location of the Holberton class.
   * @param {string} location
   */
  constructor(size, location) {
    /**
     * The size or capacity of the Holberton class.
     * @type {number}
     * @private
     */
    this._size = size;

    /**
     * The location of the Holberton class.
     * @type {string}
     * @private
     */
    this._location = location;
  }

  /**
   * Converts the Holberton class instance to a primitive
   * value based on the provided hint.
   * Overrides the default behavior using Symbol.toPrimitive.
   *
   * @param {string} hint - A hint indicating the preferred
   * type of the primitive value ('number' or 'string').
   * @returns {number|string|HolbertonClass} The primitive
   * value based on the provided hint or the HolbertonClass
   * instance.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._size;
    if (hint === 'string') return this._location;
    return this;
  }
}
