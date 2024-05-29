#! usr/bin/env node
import inquirer from "inquirer";
import { Sum,Substraction,Multiplication,Division } from "./functions.js";
import showBanner from "node-banner";
import gradient from "gradient-string";
let answers=[
{
    name:"num1",
    type:"number",
    message:(gradient.rainbow('Enter the first Number: ')),
    validate: (input:number) => {
        if (isNaN(input)) {
          return "Enter a valid number";
        }
        return true;
      }
},{
    name:"num2",
    type:"number",
    message:(gradient.rainbow('Enter the Second Number: ')),
    validate: (input:number) => {
        if (isNaN(input)) {
          return "Enter a valid number";
        }
        return true;
      }
},{
    name:"operation",
    type:"list",
    choices:["Addition","Substraction","Multiplication","Division"]
}
];
(async () => {
    await showBanner('Calculator', 'This Calculator perform addition,substraction,multiplication,division');
})();
let answer=[{
    name:"again",
    type:"confirm",
    message:gradient.rainbow("Do you want to calculate again")
}]
async function calculator(){

    let condition:boolean=true;
    while(condition){
    let {num1,num2,operation}= await inquirer.prompt(answers);
    if(operation=="Addition"){
        console.log(gradient.rainbow(`Result is ${Sum(num1,num2)}`));
    }
    else if(operation=="Substraction"){
        console.log(gradient.rainbow(`Result is ${Substraction(num1,num2)}`));
    }
    else if(operation=="Multiplication"){
        console.log(gradient.rainbow(`Result is ${Multiplication(num1,num2)}`));
    }
    else if(operation=="Division"){
        console.log(gradient.rainbow(`Result is ${Division(num1,num2)}`));
    }
    else{
        console.log(gradient.rainbow("Err"));
    }
    let {again} = await inquirer.prompt(answer);
    condition=again;

}
}
setTimeout(() => {
    calculator();
}, 500);
