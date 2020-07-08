'use strict'; // When in Vanilla JS

// Promise  
/*

What is a Promise?

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

(1) A decent way to handle async methods, without fallen into callback HELLs.
(2) Associate handlers with an asynchronous action's eventual success value or failure reason.
(3) Promise lets asynchronous methods return values like synchronous methods.
(4) Instead of immediately returning the final value, the asynchronous method 
    returns a PROMISE to supply the value "AT SOME POINT IN THE FUTURE".

Key Concept: 

(1) Three States of Promise
    [1] Pending
    [2] Fulfilled 
        or
    [3] Rejected
(2) Data Producer VS Data Consumer
    [1] Producer - Promise Object
    [2] Consumer - Then, Catch, Finally

*/

//------------------------------------------------------------------------//
//----------------- 1. Promise & Then, Catch, Finally --------------------//
//------------------------------------------------------------------------//
// * When a new promise is created, an executor function runs automatically
//   It takes care of heavy jobs that takes time (network commnication, read files)
// (1) Data Producer: Promise
const promise = new Promise((resolve, reject) => {
    console.log("--- It begins --- ");
    // TEST: Whichever action that is called first (either resolve or reject) will be transmitted => finally
    // In this exampel "reject" gets called first 2000 vs 4000 ms.
    setTimeout(() => { // resolve
        resolve("Conan has a show."); // => this callback function transfers this info to the receiver
     }, 4000);
    setTimeout(() => { // reject
       reject(new Error("Conan has no network.")); // => this callback function transfers this info to the receiver
    }, 2000);
})

// (2) Consumer: then, catch, finally
promise
    .then(val => { // If promise is kept, then value from resolve is received
        console.log(val);
    })
    .catch(err => { // if error occurs, catch the err from reject
        console.log(err);
    })
    .finally( () => {
        console.log("--- Done ---"); //executed regardless of the success/failure result
    })

