// Import the 'readline' module to handle input from the command line
const readline = require('readline');

// Create an interface to read from standard input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to handle user input
function askForName() {
  // Display the welcome message
  console.log('Welcome to Holberton School, what is your name?');

  // Prompt the user to enter their name
  rl.question('', (name) => {
    // Display the user's name
    console.log(`Your name is: ${name}`);

    // Close the readline interface
    rl.close();
  });
}

// Call the function to start asking for the user's name
askForName();

// Listen for the 'close' event
rl.on('close', () => {
  // Check if the input is coming from a pipe
  console.log('This important software is now closing');
//   if (!process.stdin.isTTY) {
//     // This message should only display in non-interactive mode (piped input)
//     console.log('This important software is now closing');
//   }
});
