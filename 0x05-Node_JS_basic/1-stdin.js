/** excecute with command line**/
//display welcome message
console.log("Welcome to Holberton School, what is your name?");

// listedn to user input
process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Handling program exit
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
