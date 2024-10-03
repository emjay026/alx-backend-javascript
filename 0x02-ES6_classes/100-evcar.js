/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class constructor
    super(brand, motor, color);

    // Validate range type
    if (typeof range !== 'string') {
      throw new TypeError('range must be a string');
    }

    this._range = range; // Store range in a private attribute
  }

  // Override cloneCar to return an instance of Car with undefined attributes
  cloneCar() {
    return new Car(undefined, undefined, undefined);
  }
}

export default EVCar;
