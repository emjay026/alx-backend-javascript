// Function definition for getting a payment token from an API
function getPaymentTokenFromAPI(success) {
    // If success is true, return a resolved promise with specific data
    if (success) {
        return Promise.resolve({ data: 'Successful response from the API' });
    }
    // If success is false, do nothing (implicitly returns undefined)
}

// Export the function for use in other files
module.exports = getPaymentTokenFromAPI; // For CommonJS
// or for ES modules use: export default getPaymentTokenFromAPI;
