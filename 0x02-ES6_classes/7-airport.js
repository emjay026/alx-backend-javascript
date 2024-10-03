/* eslint-disable no-underscore-dangle */
class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }

    this._name = name; // Store the airport name in a private attribute
    this._code = code; // Store the airport code in a private attribute
  }

  // Override toString to return the airport code
  toString() {
    return `[object ${this._code}]`;
  }
}

export default Airport;
