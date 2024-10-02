import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse]) => {
      // Log firstName and lastName from userResponse
      if (photoResponse.status === 200) console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Log the error in case of failure
      console.log('Signup system offline');
    });
}

export default handleProfileSignup();
