const users = [
  { username: "admin", password: "password123" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter youe username: ", (username) => {
  rl.question("Please enter your password: ", (password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      console.log("Login successful!");
    } else {
      console.log("Invalid username or password.");
    }
    rl.close();
  });
});
