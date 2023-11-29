/**
 * Simulates uploading a photo with the provided filename.
 * This function always rejects the Promise with an error
 * indicating that the photo cannot be processed.
 *
 * The name of the photo file to be uploaded.
 * @param {string} filename
 * A Promise that always rejects with an error message.
 * @returns {Promise}
 */
export default function uploadPhoto(filename) {
  // Create a Promise that always rejects with an error indicating the photo cannot be processed
  return Promise.reject(Error(`${filename} cannot be processed`));
}
