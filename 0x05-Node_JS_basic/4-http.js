// Import the http module
const http = require('http');

// Create a small HTTP server
const app = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as 'Hello Holberton School!'
    res.end('Hello Holberton School!');
});

// Make the server listen on port 1245
app.listen(1245, () => {
    console.log('...');
});

// Export the app to make it available for other modules
module.exports = app;
