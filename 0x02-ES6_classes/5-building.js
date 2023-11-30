/**
 * Represents a building with square footage and an evacuation warning message.
 */
export default class Building {
  constructor(sqft) {
    if (
      new.target !== Building && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft;
  }

  // Gets the square footage of the building.
  get sqft() {
    return this._sqft;
  }
}
