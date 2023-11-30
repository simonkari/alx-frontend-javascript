import Car from './10-car';

/**
 * Represents an electric vehicle (EV) car
 * with extended properties such as range.
 * Extends the Car class.
 */
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // eslint-disable-next-line
	cloneCar() {
    return new Car[Symbol.species]();
  }
}
