import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse]) => {
      // Log firstName and lastName from userResponse
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch((error) => {
      // Log the error in case of failure
      console.error('Error:', error);
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
