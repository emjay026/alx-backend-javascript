/* eslint-disable no-underscore-dangle */
class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft; // Store the square footage as a private attribute
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method to enforce that subclasses implement this method
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
