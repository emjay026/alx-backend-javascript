// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define the port to listen on
const PORT = 7865;

// Set up a route for GET requests to the root URL
app.get('/', (req, res) => {
    // Send a welcome message as the response
    res.send('Welcome to the payment system');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    // Log a message to the console when the server starts
    console.log(`API available on localhost port ${PORT}`);
});
