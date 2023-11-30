import Car from './10-car';

/**
 * Represents an electric vehicle (EV)
 * car with extended properties such as range.
 * Extends the Car class.
 */

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

   /**
   * Overrides the cloneCar method from the parent 
   * class (Car).
   * Creates a clone of the current EVCar instance 
   * using the constructor specified by Symbol.species.
   *
   * @returns {EVCar} A new instance of the EVCar class.
   */

  // eslint-disable-next-line
	cloneCar() {
    return new Car[Symbol.species]();
  }
}
