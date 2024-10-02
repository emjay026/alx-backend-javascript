import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
    .then(([photoResponse, userResponse]) => {
      // Log firstName and lastName from userResponse
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Log the error in case of failure
      console.log('Signup system offline');
    });
}
