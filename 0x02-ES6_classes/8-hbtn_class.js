/* eslint-disable no-underscore-dangle */
class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }

    this._size = size; // Store the size in a private attribute
    this._location = location; // Store the location in a private attribute
  }

  // Override valueOf to return the size (cast to Number)
  valueOf() {
    return this._size;
  }

  // Override toString to return the location (cast to String)
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
