import ClassRoom from './0-classroom';

/**
 * Initializes an array of ClassRoom instances with predefined
 * maximum student capacities.
 *
 * An array of ClassRoom instances with different maximum
 * student capacities.
 * @returns {Array}
 */
export default function initializeRooms() {
  /**
   * An array of ClassRoom instances representing different classrooms.
   * @type {Array}
   */
  const arr = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
  
  return arr;
}
