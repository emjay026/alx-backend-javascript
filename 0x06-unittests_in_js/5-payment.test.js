const sinon = require('sinon');
const Utils = require('./utils'); // Import the Utils module
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;

    beforeEach(function () {
        // Stub the Utils.calculateNumber method to always return a calculated value
        sinon.stub(Utils, 'calculateNumber').callsFake((type, a, b) => {
            if (type === 'SUM') return a + b; // Return sum for type SUM
        });

        // Spy on console.log to verify its output
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        // Restore the original method and the console.log
        Utils.calculateNumber.restore();
        console.log.restore();
    });

    it('should call Utils.calculateNumber with SUM, 100, and 20 and log the correct message', function () {
        sendPaymentRequestToApi(100, 20); // Call the function being tested

        // Verify that console.log was called with the correct message
        sinon.assert.calledWith(consoleSpy, 'The total is: 120');

        // Verify that console.log is called only once
        sinon.assert.calledOnce(consoleSpy);
    });

    it('should call sendPaymentRequestToApi with 10 and 10, and log the correct message', function () {
        sendPaymentRequestToApi(10, 10); // Call the function being tested

        // Verify that console.log was called with the correct message
        sinon.assert.calledWith(consoleSpy, 'The total is: 20');

        // Verify that console.log is called only once
        sinon.assert.calledOnce(consoleSpy);
    });
});
