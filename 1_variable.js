// 1. Use strict -> Modern syntax for Vanilla JS. ECMA5 
'use strict';

// 2. Variable
// let (ES6)

let globalName = "global Name";
//Block scope - > Not accesible outside the block
{
    let name = "inhye";
    console.log(name);
    name = "lee";
    console.log(name);
}

console.log(name); //Not being called
console.log(globalName);

// var -> Old sytax. Let's not use it. Var Hoisting
// (1) Hosting - It moves var declaration from any place in the code to the top
// (2) Does not work strictly in the block scope

// 3. Constant 
// Immutable Data Type
// (1) Secure against hacking
// (2) Thread Safety 
// (3) Reduce Human Mistakes

const startingDay ="Tuesday"


// 4. Variable Types
/*
primitive, single item
function
first-class function
*/ 


// 5. JS is Dynamically Typed Language 
// Type is decided on Runtime
// => That's why TypeScript exists
