#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
import figlet from "figlet"

figlet.defaults({fontPath: "assets/fonts"});



function ready(){
  console.log(figlet.textSync("CALCULATOR"));
  
}

async function Calculator() {
    
   let question= await inquirer.prompt([{
        name:'Opeartion',
        type:'list' ,
        message: 'Enter the operation that you want to perform from the list' ,
        choices:['Division','Multiplication','Addition','Subtraction']
    },
    {
      type:'number',
      name:'num1',
      message: 'Enter the number 1: '
    },
    {
        type:'number',
        name:'num2',
        message: 'Enter the number 2: '
      },])
      let answer;
      
    
      if(question.Opeartion==='Division'){
        answer=(question.num1) / (question.num2);
      }
      else if(question.Opeartion==='Multiplication'){
        answer=(question.num1)* (question.num2);
      }
      else if(question.Opeartion==='Addition'){
        answer=(question.num1) + (question.num2);
      }
      else if(question.Opeartion==='Subtraction'){
        answer=(question.num1)- (question.num2);
      }
      else{
        console.log("Invalid operation");
        }
    console.log(chalk.greenBright(`The result of the ${question.Opeartion} of the numbers ${question.num1} and ${question.num2} is equals to ${answer} `));
    
}
ready()
Calculator()

