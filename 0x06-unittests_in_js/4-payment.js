const Utils = require('./utils'); // Import the Utils module

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const result = Utils.calculateNumber('SUM', totalAmount, totalShipping); // Call the calculateNumber function
    console.log(`The total is: ${result}`); // Display the result in the console
}

module.exports = sendPaymentRequestToApi;
