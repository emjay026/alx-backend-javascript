const http = require('http');
const countStudents = require('./3-read_file_async'); // Import the countStudents function

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    try {
      const databaseFile = process.argv[2]; // Get the database file from command line arguments

      // Create a variable to capture console output
      let consoleOutput = '';
      const originalConsoleLog = console.log;

      // Override console.log to capture the output
      console.log = (message) => {
        consoleOutput += `${message}\n`;
      };

      await countStudents(databaseFile); // Call countStudents, which will log to console

      // Restore the original console.log
      console.log = originalConsoleLog;

      // Trim any trailing newline characters from the console output
      res.end(consoleOutput.trim());
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.end('Not found\n'); // For any other routes, respond with 'Not found'
  }
});

app.listen(1245, () => {
  console.log('...');
});

module.exports = app;
