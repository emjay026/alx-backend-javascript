import signUpUser from './4-user-promise';
import { uploadPhoto } from './utils';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName); // This should resolve successfully

  // Create a promise for photo upload that simulates a rejection for a specific condition
  const photoPromise = new Promise((resolve, reject) => {
    if (fileName === 'Gerald.jpg') {
      // Simulating the rejection
      reject(new Error(`Error: ${fileName} cannot be processed`));
    } else {
      // Otherwise, resolve with a success message
      resolve(uploadPhoto());
    }
  });

  // Use Promise.allSettled to handle both promises
  const results = await Promise.allSettled([userPromise, photoPromise]);

  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason.message,
  }));
}
