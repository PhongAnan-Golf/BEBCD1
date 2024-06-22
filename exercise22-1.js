const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input Score: ", (score) => {
  if (score >= 90) {
    console.log(4);
  } else if (score >= 80 && score <= 89) {
    console.log(3);
  } else if (score >= 70 && score <= 79) {
    console.log(2);
  } else if (score >= 60 && score <= 69) {
    console.log(1);
  } else {
    console.log(0);
  }
  rl.close();
});
