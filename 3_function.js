'use strict'; // When in Vanilla JS

// What is a Function ?
/* 

(1) Function is a Bulding block in the program
(2) function is an object in JS

*/


//------------------------------------------------------------------------//
//--------------------   1. Basic JS Function structure ------------------//
//------------------------------------------------------------------------//
// function name(param1, param2) { 
//   body 
//   return;}


//------------------------------------------------------------------------//
//---------------------------- 2. Parameters -----------------------------//
//------------------------------------------------------------------------//
// (1) Primitive parameters: passed by value
// (2) ** Object Parameters: passed by reference
//     -- Accessible on Memory
console.log("------Function Object Parameters-----")

let names =['tom', "susie", "paul", "john", "jesus", "inhye"];
function changeName(person){
    let pIndex = Math.floor(Math.random()*names.length)
    person.name = names[pIndex];
}
const inhye = {
    name: 'inhye',
    job: 'artist',
    location: 'new york',
    nationaliy: 'Korean',
};
changeName(inhye);
console.log(inhye)


//------------------------------------------------------------------------//
//--------------------  3. Default Parameters - ES6 ----------------------//
//------------------------------------------------------------------------//
console.log("------Default Parameter----")
function showMessage(msg, from = "Yours Truly") { //Default value can be specified here
console.log(`${msg} by ${from}`)
}
showMessage("Hello")
console.log("------Inserted Parameter-----")
showMessage("Hello", "Conan")


//------------------------------------------------------------------------//
//---------------------- 4. Rest Parameters - ES6 ------------------------//
//------------------------------------------------------------------------//
//...args: Delivering Parameters in the form of Array
console.log("------Rest Parameter-----")
function printAll(...args) {
    // (1) For Loop
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
    // (2) for ... of ... -> Used in Iterables => Shorter
    // For ... of ...: How is it different from for ... in: https://bitsofco.de/for-in-vs-for-of/
    for (const arg of args) {
        console.log(arg);
    }
    // (3) forEach: For each item "arg" in an Array named "args" => One liner
    args.forEach((arg)=>console.log(arg));
}
printAll("yo", "here", "I", "am")



//------------------------------------------------------------------------//
//--------------------------- 5. Local Scope -----------------------------//
//------------------------------------------------------------------------//
// (1) Parent's property can be accessed by a child. 
// (2) A Child's property cannot be accessed by the Parent.
console.log("------Local Scope-----")
let gMessage = "global"; // Global variable
function printM() {
    let message  ="hello";
    console.log(message);
    console.log(gMessage);
    function printAnother() {
        console.log(message);
        let childMessage = "hello";
    }
}
printM(); //call the function
//console.log(childMessage); // Doesn't get call -> Error 



//------------------------------------------------------------------------//
//-------------------------- 6. Retun a value ----------------------------//
//------------------------------------------------------------------------//
console.log("------Return a Value-----")
function sum(a, b) {
    return a + b; // If return is not defined, same as return undefined;
}
const result  = sum(3, 5);
console.log(`sum is ${result}`);


//------------------------------------------------------------------------//
//-------------------- 7 . Early Return, Early Exit ----------------------//
//------------------------------------------------------------------------//
// If possible, early return then early exit
// (1) Bad Example
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic inside a block
        // -> Losing readibility
    }
}

// (2) Good Example
function upgradeUser(user) {
    if (user.point <= 10) {
        // When the condition does not match,
        // exit the code block
        return; // Return-> ends function execution 
    }
    // long upgrade logic;
}

//------------------------------------------------------------------------//
// ---------------------- 8. First-class Function ------------------------//
//------------------------------------------------------------------------//
// Functions are treated like any other variables
// (1) Can be assigned as a value to a variable
// (2) Can be passed as an argument to other functions
// (3) Can be returned by another function

// 1. Function Expression - Anonymous function
// [1] Function expression is created when the execution reaches it
console.log("------(1) Function Expression-----")
console.log("(1) Anonymous Function")
const print = function() {
    console.log("print 1 - Ano");
}
// [2] You can call an anonymous function by
// --- (1) FIRST, assigning the value to a variable 
// --- (2) THEN, Call the variable just like how we call a function
print(); 

// [3] This variable can be assigned to another variable, So you can call it again 
const printAgain = print;
printAgain();

// 2. Function Declaration - Named Function
console.log("(2) Named Function")
function printMe() {
    console.log("print 2 - Named");
}
printMe();

//Defining already called function above and call it
console.log("(3) Rename and Call an existing function")
const sumSum = sum;
console.log(sumSum(3, 50));

// 3.  *** Comparison *** 
// Function declaration can be called earlier than it is defined (hoisted)

// Call-Back Function Using Function Expression
// Here, two call-back functions are used as parameters
// **** I'm still a little bit confused
console.log("(-----Call Back function using function expression-----")
function lateNiteQuiz(host, sayYes, sayNo) {
    if (host === "Conan") {
        sayYes();
    }   else {
        sayNo();
    }
}

const sayYes = function() {
    console.log("Yes. Conan is the best late night host!")
}

// 4. Named function -> better for debugging in 
// in debugger's stack traces 
// recursions -> Calling itself inside 
const sayNo = function printSayNo() {
    console.log("Boo. You don't think Conan is the best late night host?");
   // printSayNo(); -> Calling itself inside like this will kill the machine 
   // So, only use it when calculating fibonacci series and such. 
}

lateNiteQuiz("Conan", sayYes, sayNo);
lateNiteQuiz("Jimmy", sayYes, sayNo);


//------------------------------------------------------------------------//
// -------------------------- 9. Arrow Function  -------------------------//
//------------------------------------------------------------------------//
// Arrow Function is Much Simpler to write
// Arrow Function is Always anonymous
console.log("(-----Arrow Function-----")

// (1) When the body is just one line. Don't need a body block
// const simplePrint = function() {
//     console.log("simplePrint");
// } // Comparison
const simplePrint = () => console.log("simplePrint");
const add = (a,b) => a + b;
console.log(add(4,5));

// (2) When the body has more than a line
const simpleMultiply = (a, b) => {
    // other...
    return a * b;
}
console.log(simpleMultiply(3,50));



//------------------------------------------------------------------------//
//------------10. IIFE: Immediately Invoked Function Expressions ---------//
//------------------------------------------------------------------------//
// Not really popular these days
// Encapsulate (function-)()
// Gets executed without exclusively calling it
console.log("----IIFE-----");
(function hello() {
    console.log("IIFE is called without calling the name");
})(); 