/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */
const carSymbol = Symbol('Car Symbol');

class Car {
  constructor(brand, motor, color) {
    // Check input types
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    }
    if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string');
    }
    if (typeof color !== 'string') {
      throw new TypeError('color must be a string');
    }

    // Store attributes as private using underscore naming convention
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Add a symbol property to enhance encapsulation (optional)
    this[carSymbol] = true; // Indicates this object is a Car instance
  }

  // Method to clone the car object
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

export default Car;
