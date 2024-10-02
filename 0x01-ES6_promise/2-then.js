// This function handles the response from a given API promise. It processes the promise and
// returns an object with the status and body on success, or an error on failure.
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => new Error());
}
