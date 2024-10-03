import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  const photoResponse = await uploadPhoto();
  const userResponse = await createUser();

  // Log firstName and lastName from userResponse
  if (photoResponse.status === 200) {
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  }
}

export default handleProfileSignup;
