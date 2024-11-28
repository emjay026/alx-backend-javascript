// Import required libraries
const { expect } = require('chai'); // Importing expect from Chai
const getPaymentTokenFromAPI = require('./6-payment_token'); // Importing the function to be tested

describe('getPaymentTokenFromAPI', () => {

    // Test case for when the success argument is true
    it('should return a resolved promise with the expected data when success is true', async () => {
        // Call the function with true and wait for the resolved promise
        const response = await getPaymentTokenFromAPI(true);
        
        // Assert that the resolved response matches the expected object structure
        expect(response).to.eql({ data: 'Successful response from the API' }); // Use eql for deep equality check
    });

    // Test case for when the success argument is false
    it('should do nothing and return undefined when success is false', () => {
        // Call the function with false and store the result
        const result = getPaymentTokenFromAPI(false);
        
        // Assert that the result is undefined, as expected when success is false
        expect(result).to.be.undefined; // Check for undefined
    });
});
