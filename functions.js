//similar to methods in java, functions are blocks of code that can be called and executed when needed. 
// Functions can take parameters and return values. 
// In JavaScript, functions can be defined using the function keyword or as arrow functions.

function add(a, b){
    return a*b;
}

let x=2, y=10;
console.log(add(x,y));

//arrow function
const isEven = (num) => {
    return num % 2 ===0;
}
console.log(isEven(4));
console.log(isEven(5));

