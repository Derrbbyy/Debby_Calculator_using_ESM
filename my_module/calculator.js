

export const regNumber = "BD/2025/TC3/040";


export function add (num1,num2){
    return num1 + num2
}

 export function subtract (num1,num2){
    return num1 - num2
}

 export function multiply (num1,num2){
    return num1 * num2
}

export function divide (num1,num2){
    if(num2===0){
        console.log("Cannot divide by zero");
    }
    return num1 / num2
}

export default function nameFormatter(firstName,LastName){
return `My name is ${firstName} ${LastName}`
}

