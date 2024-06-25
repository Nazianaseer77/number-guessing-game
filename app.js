#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = 13;
const answer = await inquirer.prompt([
    {
        name: "user Guess number",
        type: "number",
        message: "please guess a number",
    }
]);
console.log;
if (answer.userGuessNumber === randomNumber) {
    console.log("congratulation! you guessed right number");
}
else {
    console.log("you gussed a wrong number");
}
