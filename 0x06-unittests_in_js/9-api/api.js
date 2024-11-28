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

// Set up a route for GET requests to /cart/:id
app.get('/cart/:id', (req, res) => {
    const id = req.params.id;

    // Validate that id is a number
    if (!/^\d+$/.test(id)) {
        return res.status(404).send('Not Found');
    }

    // Return response for valid cart ID
    res.send(`Payment methods for cart ${id}`);
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    // Log a message to the console when the server starts
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export app for testing
