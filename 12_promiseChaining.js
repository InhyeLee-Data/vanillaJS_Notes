'use strict'; // When in Vanilla JS

// Promise Chaining
/*

    Continuation of Promise

*/


//------------------------------------------------------------------------//
//------------------------ 1. Promise Chaining ---------------------------//
//------------------------------------------------------------------------//
// (1) Producer: Create a promise object
const fetchNum = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve(1), 1000 // send 1 when successful in 1000 ms
    })
});

// (2) Consumer: Promise Chain promise.then().then()... 
//     Upon Receiving from resolve(), do the following
fetchNum  
    .then(num => num * 3) // Chain [1]: 1*3 = 3
    .then(num => num * 5) // Chain [2]: 3*5 = 15
    .then(num => { // Here, another promise object
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num / 3), 1000) // Chain [3]: 15/3 = 5
        })
    })
    .then(num => console.log(num));  // Chain [4]: 5



//------------------------------------------------------------------------//
//--------------- 2. Error Handling in Promise Chaining ------------------//
//------------------------------------------------------------------------//
// Chaining Process: (1) Get Conan => (2) Do String Dance => (3) Do Opening
// (1) Process 1
const one_getConan = () => 
    new Promise ((resolve, reject) => {
        setTimeout(  () => resolve("(1) Conan appears on the stage."), 1000)
    })

// (2) Process 2 - The LONG WAY (   Compare it with the other Process 2   )
// const two_stringDance = (conan) => { // "conan" is passed a parameter / 
//     return new Promise ((resolve, reject) => { // When () => {} is used in the arrow function, "return" have to be used
//         setTimeout(  () => resolve(`${conan}-> Conan does the string Dance`), 1000);
//     });
// };   
// (2) Process 2  - The SHORT WAY
const two_stringDance = conan => // *** "conan" is passed a parameter. () is omitted / 
    new Promise ((resolve, reject) => { // *** When {} is NOT used after the arrow "return" SHOULD BE OMITTED
            setTimeout(  () => resolve(`${conan}\n(2) Conan does the string Dance.`), 1000);
    });

// (3) Process 3
const three_opening = stringDance =>  // *** "stringDance" is passed a parameter.
    new Promise ((resolve, reject) => {
        setTimeout(  () => resolve(`${stringDance} \n(3)    "Hi, everyone!  \n        We have a great show tonight.  \n        We really do"`), 1000);
    });

one_getConan() 
    .then(two_stringDance)
    .catch(console.log) // then().catch() => You can chain error catching function, right after the related action 
    .then(three_opening)
    .then(console.log);