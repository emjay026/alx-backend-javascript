const express = require('express');
// Import the express module
const app = express(); // Create an instance of an Express application

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Send a response to the client
});

// Make the server listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log('...');
});

// Export the app for testing or reuse
module.exports = app;
