
//import built-in module
import { fileURLToPath } from "node:url";
import {dirname, basename } from "node:path";
import path from "node:path";

//import third-party module
import chalk from "chalk";

// import my custom modules
import {regNumber,add,divide,subtract,multiply} from "./my_module/calculator.js"
import nameFormatter from "./my_module/calculator.js";


// USING THE BUILT-IN MODULE "path" to access basename
 console.log(import.meta.url);

const __filename= fileURLToPath(import.meta.url);
console.log(__filename);

console.log(basename(__filename));

const __dirname = fileURLToPath(import.meta.url);
console.log(__dirname);

console.log(basename(__dirname));


// // USING CUSTOM MODULE
 console.log("My Registration number:",regNumber);
console.log("Addition result:",add(3,5));
  console.log("Division result:",divide(3,5));
  console.log("Subtraction result:",subtract(22,5));
  console.log("Multipplication result:",multiply(3,5));
console.log(nameFormatter("Deborah","Onuoha"));


 // USING THE THIRD-PARTY MODULE "chalk"
  console.log(chalk.red("My Registration number:", regNumber));
  console.log(chalk.green("Addition result:",add(3,5)));
  console.log(chalk.red("Division result:",divide(3,0)));
 console.log(chalk.blue("Subtraction result:",subtract(3,5)));
 console.log(chalk.magenta("Multipplication result:",multiply(3,5)));
console.log(chalk.bgGrey(nameFormatter("Deborah","Onuoha")));

//  USING THE FUNCTIONALITY ON VARIABLES
  const num1= 15;
  const num2 = 3;

  const sum = add(num1,num2); 
  const diff = subtract(num1,num2); 
  const product = multiply(num1,num2) ;
  const division = divide(num1,num2) ;
   console.log(chalk.green("Addition result:",sum));
  console.log(chalk.red("Division result:",division));
  console.log(chalk.blue("Subtraction result:",diff));
 console.log(chalk.magenta("Multipplication result:",product));