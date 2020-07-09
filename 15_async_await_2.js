'use strict'; // When in Vanilla JS

// More on Async and Await
/*

References: 

********************
This example is from Async + Await by Fireship: https://www.youtube.com/watch?v=vn3tm0quoqE
********************
Event Loop by Jake Archibald: https://www.youtube.com/watch?v=cCOL7MC4Pl0

*/


//------------------------------------------------------------------------//
//------------------ 1. Execution Order in the EVENT LOOP ----------------//
//------------------------------------------------------------------------//
// (1) Micro Task - fulfilled Promise -> Called back BEFORE the start of the Next Event Loop
// (2) Macro Task - setTimeout(), setInterval() -> Executed on the Next Event Loop
// So, the order of the following becomes 1 => 4 => 3 => 2
console.log("1. Synchnous");
setTimeout(_ => console.log("2. Timeout"),0);
Promise.resolve().then(_ => console.log("3. Promise"));
console.log("4. Synchronous");



//------------------------------------------------------------------------//
//--------------- 2. then().catch() Chain + Error Handling ---------------//
//------------------------------------------------------------------------//
// import fetch from 'node-fetch'; // node-fetch has to be installed; A light-weight module 
 
const prom1 = fetch('https://jsonplaceholder.typicode.com/todos/1'); // fetch() => Promise
const prom2 = fetch('https://jsonplaceholder.typicode.com/todos/1'); // Same file fetched in a different const.

// (1) Error Catching
prom1
    .then(response => response.json()) //.json() => Promise
    .then(user => console.log('😛', user.title)) //
    .catch(err => console.log('😭', err)); // This will catch errors that happen anywhere in the asynchronous code

// (2) Error Catching example 2
prom2  
  .then(response => response.json())
  .then(user => {
    throw new Error('uh oh'); // This error will be caught by catch() 
    return user;
  })
  .then(user => console.log('😛', user.title))
  .catch(err => console.error('😭', err));  // catch any errors

