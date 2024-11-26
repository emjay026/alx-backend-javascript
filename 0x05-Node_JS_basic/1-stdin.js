// Prompt the user with a welcome message and ask for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for readable events on standard input
process.stdin.on('readable', () => {
  // Read data from standard input
  const stream = process.stdin.read();

  // If data is available, write it to standard output
  if (stream) {
    // Remove any trailing newline characters and display the user's name
    process.stdout.write(`Your name is: ${stream}\n`);
  }
});

// Listen for the 'end' event on standard input
process.stdin.on('end', () => {
  // Display a closing message when input ends
  process.stdout.write('This important software is now closing\n');
});
