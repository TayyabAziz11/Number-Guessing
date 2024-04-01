#!/usr/bin/env node
// * computer will generate a random number
// * user input for guessing number
// * compare user input with computer generated number and show result
import inquirer from "inquirer";
console.log("'WELCOME to guess the number game' ");
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1 - 6: ", }
]);
if (answer.userguessednumber === randomnumber) {
    console.log("Congratulations! You guessed a right number.");
}
else {
    console.log("you guessed a wrong number");
}
console.log("THANKS for Playing come back soon");
