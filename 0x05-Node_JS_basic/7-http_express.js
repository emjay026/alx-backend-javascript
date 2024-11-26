const express = require('express');
const countStudents = require('./3-read_file_async');
// Import countStudents function
const app = express(); // Create an Express application

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Send response for the root endpoint
});

// Define a route for the /students endpoint
app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n'); // Initial line for the /students response

  try {
    const databaseFile = process.argv[2]; // Get the database file from command line arguments

    // Create a variable to capture console output
    let consoleOutput = '';
    const originalConsoleLog = console.log;

    // Override console.log to capture the output
    console.log = (message) => {
      consoleOutput += `${message}\n`;
    };

    await countStudents(databaseFile); // Call countStudents to populate console output

    // Restore the original console.log
    console.log = originalConsoleLog;

    // Trim any trailing newlines and send captured output
    res.end(consoleOutput.trim());
  } catch (error) {
    res.status(500).send(error.message); // Send error message with 500 status
  }
});

// Make the server listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log('...');
});

// Export the app for testing or reuse
module.exports = app;
