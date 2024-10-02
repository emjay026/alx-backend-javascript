export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation, for example, fetching data from an API
    setTimeout(() => {
      // Simulate a successful response
      resolve('Response from API');
      
    }, 1000); // Simulate a delay of 1 second
  });
}
