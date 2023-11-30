import Building from './5-building';

/**
 * Represents a sky-high building with square footage,
 * floors, and an evacuation warning message.
 * Extends the Building class.
 */

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // The number of floors in the sky-high building.
  get floors() {
    return this._floors;
  }

  /**
   * Overrides the evacuationWarningMessage method
   * from the parent class (Building).
   * Provides a customized evacuation warning message
   * for the sky-high building.
   *
   * @returns {string} The evacuation warning message
   * specific to the sky-high building.
   */

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
