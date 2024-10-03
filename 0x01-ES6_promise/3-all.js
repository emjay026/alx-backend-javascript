import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    // Log the photo body and user's first and last name
    if (photoResponse.status === 200) {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    }
  } catch (error) {
    // Log the error message in case of failure
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;
