// Import the request library for making HTTP requests
const request = require('request');
// Import the expect function from Chai for assertions
const { expect } = require('chai');

// Describe block to group related tests
describe('API integration test', () => {
  // Define the base URL for the API
  const API_URL = 'http://localhost:7865';

  // Test case for the root URL
  it('GET / returns correct response', (done) => {
    // Make a GET request to the root URL of the API
    request.get(`${API_URL}/`, (_err, res, body) => {
      // Assert that the status code of the response is 200
      expect(res.statusCode).to.be.equal(200);
      // Assert that the body of the response matches the expected message
      expect(body).to.be.equal('Welcome to the payment system');
      // Indicate that the asynchronous test is complete
      done();
    });
  });

  // Test case for a non-existent endpoint
  it('GET /nonexistent returns 404 status code', (done) => {
    request.get(`${API_URL}/nonexistent`, (_err, res) => {
      // Assert that the status code of the response is 404
      expect(res.statusCode).to.be.equal(404);
      // Indicate that the asynchronous test is complete
      done();
    });
  });

  // Test case for checking the content type of the response
  it('GET / returns correct content type', (done) => {
    request.get(`${API_URL}/`, (_err, res) => {
      // Assert that the content type is 'text/html; charset=utf-8'
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      // Indicate that the asynchronous test is complete
      done();
    });
  });

  // Additional test for a POST request (if applicable, you can adapt this to your API)
    it('POST /submit returns 404 status code (Not Found)', (done) => {
        request.post(`${API_URL}/submit`, (_err, res) => {
            // Assert that the status code of the response is 404
            expect(res.statusCode).to.be.equal(404);
            // Indicate that the asynchronous test is complete
            done();
        });
    });

});
