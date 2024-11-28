const sinon = require('sinon');
const Utils = require('./utils'); // Import the Utils module
const sendPaymentRequestToApi = require('./4-payment'); // Import the function directly

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;

    beforeEach(function () {
        // Stub the Utils.calculateNumber method to always return 10
        sinon.stub(Utils, 'calculateNumber').returns(10);

        // Spy on console.log to verify its output
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        // Restore the original method and the console.log
        Utils.calculateNumber.restore();
        console.log.restore();
    });

    it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
        sendPaymentRequestToApi(100, 20); // Call the function being tested

        // Validate that calculateNumber was called with the expected arguments
        sinon.assert.calledWith(Utils.calculateNumber, 'SUM', 100, 20);
    });

    it('should log the correct message', function () {
        sendPaymentRequestToApi(100, 20); // Call the function being tested

        // Verify that console.log was called with the correct message
        sinon.assert.calledWith(consoleSpy, 'The total is: 10');
    });
});
