'use strict'; // When in Vanilla JS

// callbacks
/*

* JS Premise:
(1) JS is synchronous.
(2) JS executes the code blocks in the written order, after hoisting (var, function declaration).

* Then, what is Asynchronous programming?
Ref: https://visualstudiomagazine.com/articles/2011/03/24/wccsp_asynchronous-programming.aspx#:~:text=Asynchronous%20programming%20is%20a%20means,its%20benefits%20and%20problem%20points.
(1) Async is a means of parallel programming in which a unit of work runs separately from the main application thread 
(2) Async notifies the calling thread of its completion, failure or progress
(3) Callbacks can be the starting point of Asynchronous Programming.
(4) You can execute code at a different time from its written position.
*/



//------------------------------------------------------------------------//
//--------------------------- 1. setTimeout() ----------------------------//
//------------------------------------------------------------------------//
// setTimeout(): One example where Asynchronous callback is used.
// setTimeout() is a Browser API.
// (( - Execution order - ))
// ((1)) Executes this first
console.log("A");
// setTimeout(function() { 
//     //callback function
//     console.log("Dude, I'm Back."); // 
// }, 1000); // 
// ((2)) Here, setTimeout() is requested to the browser. 
// ((4)) Then, the requested function is executed (called back) 1000 ms(1sec) later. 
setTimeout(() => console.log("B. Dude, I'm finally here."), 1000); 
// ((3)) Before seeing the result of setTimeout() above, the following executes
console.log("C"); 



//------------------------------------------------------------------------//
//------------------------ 2. Synchronous CallBack -----------------------//
//------------------------------------------------------------------------//
// Reference: https://medium.com/@pravngaur/callbacks-synchronous-asynchronous-62bac2b8fe85
// (1) This function declaration will be hoisted by JS engine to the top of the program
function callMeRightAway(anythingGoes) { 
    anythingGoes(); //callback
}
// (2) Then the function gets called right after the the (3) step of the Section 1.
callMeRightAway(() => console.log("D. Synchronous Callback Gets Called Right Away."));



//------------------------------------------------------------------------//
//------------------------ 3. Asynchronous CallBack ----------------------//
//------------------------------------------------------------------------//
// (1) This function declaration will be hoisted by JS engine to the top of the program
function callMeLater(callback) { 
    setTimeout(callback, 1500); // callback
}
// (2) Then the function gets called after 1.5 sec.
callMeLater(() => console.log("E. Asynchronous Callback Gets Called 1.5 sec later."));