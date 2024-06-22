const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input Score: ", (inputs) => {
  if (inputs >= 90) {
    console.log("4");
  } else {
    console.log("^_^");
  }
  rl.close();
});
