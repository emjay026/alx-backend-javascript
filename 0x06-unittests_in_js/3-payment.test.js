const sinon = require('sinon');
const Utils = require('./utils'); // Import the Utils module
const sendPaymentRequestToApi = require('./3-payment'); // Import the function directly

describe('sendPaymentRequestToApi', function () {
    it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
        const spy = sinon.spy(Utils, 'calculateNumber'); // Create a spy for calculateNumber

        sendPaymentRequestToApi(100, 20); // Call the function being tested

        // Validate that calculateNumber was called with the expected arguments
        sinon.assert.calledWith(spy, 'SUM', 100, 20);

        // Restore the original function
        spy.restore();
    });
});
