import Car from './10-car';

/**
 * Represents an electric vehicle (EV) car
 * with extended properties such as range.
 * Extends the Car class.
 */
export default class EVCar extends Car {
  /**
   * Creates a new instance of the EVCar class
   * with the specified brand, motor, color, and range.
   *
   * The brand of the EV car.
   * @param {string} brand
   * The type of motor in the EV car.
   * @param {string} motor
   * The color of the EV car.
   * @param {string} color
   * The range of the EV car in miles.
   * @param {number} range
   */
  constructor(brand, motor, color, range) {
    // Call the constructor of the parent class (Car) with brand, motor, and color
    super(brand, motor, color);

    /**
     * The range of the EV car in miles.
     * @type {number}
     * @private
     */
    this._range = range;
  }

  /**
   * Gets the range of the EV car in miles.
   * @returns {number} The range of the EV car.
   */
  get range() {
    return this._range;
  }

  /**
   * Overrides the cloneCar method from the parent class (Car).
   * Creates a clone of the current EVCar instance using the 
   * constructor specified by Symbol.species.
   *
   * @returns {EVCar} A new instance of the EVCar class.
   */
  // eslint-disable-next-line
  cloneCar() {
    return new Car[Symbol.species]();
  }
}
