import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    // Log firstName and lastName from userResponse
    if (photoResponse.status === 200) {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    }
  } catch (error) {
    // Log the error message in case of failure
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;
