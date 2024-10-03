/* eslint-disable no-underscore-dangle */
import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor with sqft
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = floors; // Store floors in a private attribute
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}

export default SkyHighBuilding;
