// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Please enter a number: ', (number) => {
//     console.log(`You entered: ${number}`);
//     rl.close();
// });

const prompt = require('prompt-sync')();

// Prompt the user to enter a number
const number = prompt('Please enter a number: ');

console.log(`You entered: ${number}`);