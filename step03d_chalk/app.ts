import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your Age:"}
]);

console.log(chalk.bgBlue(answers.age));