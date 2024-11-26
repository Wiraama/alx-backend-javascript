/** excecute with command line**/
//display welcome message
console.log("Welcome to Holberton School, what is your name?");

// listedn to user input
process.stdin.on('data', (data) => {
  const input = data.toString().trim();

  if (input) {
    console.log(`Your name is: ${input}`);
  }
  process.exit();
});

// Handling program exit
process.on('exit', () => {
  console.log("This important software is now closing");
});
