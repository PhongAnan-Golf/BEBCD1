// Import the readline module to create an interface for reading input
const readline = require("readline");

// Create an interface to read data from the keyboard
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user to enter some text
rl.question("น้ำหนักของคุณเท่าไหร่ : ", (weight) => {
  // Log the answer to the console
  console.log(`คุณควรดื่มน้ำ: ${weight * 33} ลิตรต่อวัน`);

  // Close the readline interface
  rl.close();
});
