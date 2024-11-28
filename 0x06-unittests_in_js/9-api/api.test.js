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
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  // Test case for a non-existent endpoint
  it('GET /nonexistent returns 404 status code', (done) => {
    request.get(`${API_URL}/nonexistent`, (_err, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  // Test case for checking the content type of the response
  it('GET / returns correct content type', (done) => {
    request.get(`${API_URL}/`, (_err, res) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      done();
    });
  });

  // Test case for POST request
  it('POST /submit returns 404 status code (Not Found)', (done) => {
    request.post(`${API_URL}/submit`, (_err, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  // New test suite for the cart page
  describe('Cart API tests', () => {
    // Test case for valid cart ID
    it('GET /cart/1 returns correct response', (done) => {
      request.get(`${API_URL}/cart/1`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Payment methods for cart 1');
        done();
      });
    });

    // Test case for invalid cart ID (non-number)
    it('GET /cart/invalid returns 404 status code', (done) => {
      request.get(`${API_URL}/cart/invalid`, (_err, res) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });

    // Test case for invalid cart ID (empty)
    it('GET /cart/ returns 404 status code', (done) => {
      request.get(`${API_URL}/cart/`, (_err, res) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });

    // Test case for invalid cart ID (negative number)
    it('GET /cart/-1 returns 404 status code', (done) => {
      request.get(`${API_URL}/cart/-1`, (_err, res) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });
});
