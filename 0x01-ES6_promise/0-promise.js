/**
 * A function that simulates making a request to an API and returns a Promise.
 *
 * @returns {Promise}
 */
export default function getResponseFromAPI() {
  // Simulate a successful API response
  const success = true;

  // Create a new Promise that either resolves or rejects based on the 'success' variable
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve the Promise if the API request is successful
      resolve();
    } else {
      // Reject the Promise if the API request fails
      reject();
    }
  });
}
