/**
 * Simulates signing up a user by creating a user object
 * with the provided first name and last name.
 *
 * The first name of the user.
 * @param {string} firstName
 * The last name of the user.
 * @param {string} lastName
 * A Promise that resolves with an object containing the
 * user's first name and last name.
 * @returns {Promise}
 */
export default function signUpUser(firstName, lastName) {
  // Create a Promise that immediately resolves with a user object
  return Promise.resolve({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  });
}
