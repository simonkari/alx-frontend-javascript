/**
 * A function that simulates making a request to a fake API and returns a Promise.
 *
 * @param {boolean} boolean
 * @returns {Promise}
 */
export default function fakeAPIRequest(boolean) {
  // Create a new Promise that either resolves or rejects based on the 'boolean' parameter
  return new Promise((resolve, reject) => {
    // Define a mock response object for a successful API request
    const object = {
      status: 200,
      body: 'Success',
    };

    if (boolean === true) {
      // Resolve the Promise with the mock response object if the API request is successful
      resolve(object);
    } else {
      // Reject the Promise with an error message if the API request fails
      reject(Error('The fake API is not working currently'));
    }
  });
}
