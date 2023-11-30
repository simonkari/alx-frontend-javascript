/**
 * Represents a classroom with a maximum capacity for students.
 */
export default class ClassRoom {
  /**
   * Creates a new instance of the ClassRoom class with the
   * specified maximum number of students.
   *
   * The maximum capacity of the classroom for students.
   * @param {number} maxStudentsSize
   */
  constructor(maxStudentsSize) {
    /**
     * The maximum capacity of the classroom for students.
     * @type {number}
     * @private
     */
    this._maxStudentsSize = maxStudentsSize;
  }
}
