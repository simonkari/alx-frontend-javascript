/**
 * Divides a numerator by a denominator
 * and returns the result.
 * Throws an error if the denominator is 0.
 *
 * The number to be divided.
 * @param {number} numerator
 * The number by which the numerator is divided.
 * @param {number} denominator
 * The result of dividing the numerator by the denominator.
 * @returns {number}
 * Throws an error with the message 'cannot divide by 0' if
 * the denominator is 0.
 * @throws {Error}
 */
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is 0 and throw an error if true
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  } else {
    // Return the result of dividing the numerator by the denominator
    return numerator / denominator;
  }
}
