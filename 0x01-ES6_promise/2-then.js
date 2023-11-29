/**
 * A function that handles a response from an API Promise and
 * transforms it into a formatted object.
 * It also logs a message indicating that a response has been
 * received from the API, regardless of success or failure.
 *
 * The Promise representing the response from the API.
 * @param {Promise} promise
 * A Promise that resolves with a formatted success object or
 * rejects with an error.
 * @returns {Promise}
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
