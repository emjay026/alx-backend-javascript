/* eslint-disable no-underscore-dangle */
// 10-car.js
const carSymbol = Symbol('Car Symbol');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[carSymbol] = true; // optional symbol property
  }

  cloneCar() {
    return new this.constructor(undefined, undefined, undefined);
  }
}

export default Car;
