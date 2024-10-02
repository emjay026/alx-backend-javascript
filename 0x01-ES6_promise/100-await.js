import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If there's an error, return an object with null values
    return {
      photo: null,
      user: null,
    };
  }
}
