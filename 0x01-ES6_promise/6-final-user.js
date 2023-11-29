import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles the process of signing up a user and uploading
 * a photo, resolving or rejecting
 * each operation independently. Returns an array of
 * objects representing the status and value
 * of each Promise, whether fulfilled or rejected.
 *
 * The first name of the user.
 * @param {string} firstName
 * The last name of the user.
 * @param {string} lastName
 * The name of the photo file to be uploaded.
 * @param {string} fileName
 * A Promise that resolves with an array of objects, each
 * containing the status('fulfilled' or 'rejected') and the
 * value or error message of each operation.
 * @returns {Promise} 
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create Promises for signing up a user and uploading a photo
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both promises independently
  return Promise.allSettled([signUp, upload]).then((settledPromises) => {
    // Process the results of each settled Promise and create an array of status and value/error objects
    const result = settledPromises.map((settledPromise) => {
      if (settledPromise.status === 'fulfilled') {
        return { status: settledPromise.status, value: settledPromise.value };
      } else {
        return { status: settledPromise.status, value: `Error: ${settledPromise.reason.message}` };
      }
    });

    return result;
  });
}
