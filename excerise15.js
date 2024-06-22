const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Your name : ", (inputs) => {
  console.log(`Hello ${inputs}`);
  console.log(`Goodbye, ${inputs}`);
  rl.close();
});
