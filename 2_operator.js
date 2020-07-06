// Let's go strict in vanilla javascript   // ECMA 5
'use strict'; 

// Operators . Loops
/*

*/


//------------------------------------------------------------------------//
//-----------1. Ternary Operator  IF SO ?  DO THIS : ELSE THAT------------//
//------------------------------------------------------------------------//
// A Short way to write an if/else statement //
console.log("------TERNARY------")
const name ="conan"
console.log(name ==="obrien" ? 'yes' : 'no');



//------------------------------------------------------------------------//
//-------------------------2. Switch Case---------------------------------//
//------------------------------------------------------------------------//
// Use for Multiple If Checks
// enum (later)
// typeScript - type check
console.log("------SWITCH------")
const browser ="Chrome"
switch (browser) {
    case "IE":
        console.log("get lost, IE");
        break; // Break out of switch block
    case "Chrome":
    case "Firefox": // Applying the same rule for these two
        console.log("Chrome or firefox is fine");
        break;
    default: //no case match
        console.log ("All the other cases")
        break;
}



//------------------------------------------------------------------------//
//-----------------------------3. While Loop------------------------------//
//------------------------------------------------------------------------//
// While the condition is true, code in the bracket is executed
console.log("------WHILE LOOP------")
let i = 10;
while (i > 0) {
    console.log(`while i is ${i}, I'm here`);
    i --; // Adding the step is necessary. Otherwise, it will run forever
}



//------------------------------------------------------------------------//
//----------------------------4. Do While Loop----------------------------//
//------------------------------------------------------------------------//
// (1) DO: Excute the code first
// (2) WHILE: then check the condition
// In this case, i starts as Zero from above while loop code
console.log("------DO WHILE LOOP------")
do {    
    console.log(`while i is ${i}, I'm here`);
    i --;
} while (i > 0)



//------------------------------------------------------------------------//
//----------------------------- 5. For Loop ------------------------------//
//------------------------------------------------------------------------//
// FOR (begin; condition; step)
// (1) begin - check once beginning 
// (2) condition - check continuously until it doesnt work; 
// (3) step - After condition is met, Increment
console.log("------FOR LOOP------")
for (let i = 3; i > 0; i--) { //inline variable declaration
    console.log(`for i is ${i} I'm still here`)
}



//------------------------------------------------------------------------//
//------------------------6. Nested Loop (if, while)----------------------//
//------------------------------------------------------------------------//
// -> CPU intensive as it becomes a product of i & j
console.log("------NESTED FOR LOOP------")
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <10; j++) {
        console.log(`i: ${i}, j: ${j}`)
    }
}



//------------------------------------------------------------------------//
//-----------  7. Break, Continue - Ways to Finish Looping ---------------//
//------------------------------------------------------------------------//
// (1) Break - Finish Everything. Get Out of the Loop.
// (2) Continue - Skip this then Go To The Next iteraxtion of the loop

// - Example 1 - 
// Iterate from 0 to 10, print only even numbers
// (1) SIMPLER: For - if Statement
console.log("------Printing Even Nums NOT using Continue------")
for (let i = 0; i < 11; i++) {
    if (i%2 == 0){
        console.log(`From 0 - 10, Even i is ${i}`);
    }
}
// (2) For - If - with "Continue"
console.log("------Printing Even Nums Using Continue------")
for (let i = 0; i < 11; i++) {
    if (i%2 !== 0){
        continue; // Exit from this body and go to the next iteraction
    }
    console.log(`From 0 - 10, Even i is ${i}`); // If no continue, execute this line, and go back to the main loop.
}


// - Example 2 -
// Iterate from 0 to 10, print numbers until reaching 8
// (1) SIMPLER: "while"
console.log("------Print Nums until reaching 8, Using While------")
let j = 0;  // 1) Begin 
while (j < 8) { // 2) Condition
    console.log(j)
    j ++; // 3) Step
}

// (2) SIMPLER: if Statement
console.log("------1) Print Nums until reaching 8, Using For Loop------")
for (let m = 0; m < 8; m++) {
    console.log(`printed number is ${m}`);
}

console.log("------2) Print Nums until reaching 8, Using For Loop------")
for (let m = 0; m < 8; m++) {
    if (m %2 == 0){
    console.log(`printed number is ${m}`);
    }
}

// (3) SIMPLER: while - With Break
console.log("------Print Nums until reaching 8, Using While & Break------")
let k = 0;
while (k < 11) {
    console.log(k)
    k ++;
    if (k > 8) {
    break; // Get out of the entire code // The rest of the iterable doesnt count.
    }
}
