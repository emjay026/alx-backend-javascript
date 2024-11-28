// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json()); // This is necessary to parse incoming JSON request bodies

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

// Set up a route for GET requests to /available_payments
app.get('/available_payments', (req, res) => {
    // Return an object with available payment methods
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

// Set up a route for POST requests to /login
app.post('/login', (req, res) => {
    const { userName } = req.body; // Extract userName from the request body

    // Return a welcome message using the provided username
    res.send(`Welcome ${userName}`);
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    // Log a message to the console when the server starts
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export app for testing
