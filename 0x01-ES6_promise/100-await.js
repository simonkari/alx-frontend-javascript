import { uploadPhoto, createUser } from './utils';

/**
 * Asynchronously uploads a photo and creates a user,
 * returning an object with the photo and user information.
 * If any step fails, it returns an object with null
 * values for both photo and user.
 *
 * A Promise that resolves with an object containing
 * the photo and user information, or rejects with an
 * object containing null values if any step fails.
 * @returns {Promise<Object>}
 */
const asyncUploadUser = async () => {
  try {
    // Await the uploadPhoto and createUser functions to execute asynchronously
    const photo = await uploadPhoto();
    const user = await createUser();

    // Return an object with the photo and user information
    return { photo, user };
  } catch (error) {
    // If any step fails, return an object with null values for both photo and user
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
