import { uploadPhoto, createUser } from './utils';

/**
 * Handles the process of signing up a user by uploading
 * a photo and creating a user profile.
 * It logs the success message with the uploaded photo body,
 * user's first name, and last name.
 * If any part of the signup process fails, it logs an error
 * message indicating that the signup system is offline.
 *
 * A Promise that resolves after both photo upload and user
 * creation are successful,
 * or rejects if any part of the process fails.
 * @returns {Promise}
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      // Destructure the resolved values for clarity
      const [photoResponse, userResponse] = values;

      // Log success message with uploaded photo body, user's first name, and last name
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Log an error message if the signup system is offline
      console.log('Signup system offline');
    });
}
