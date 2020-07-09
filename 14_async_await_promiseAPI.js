'use strict'; // When in Vanilla JS

// Async & Await  
/*

    (1) An Easier way to use promise
    (2) Synctactic sugar:  
        It makes the language "sweeter" for human use: 
        things can be expressed more clearly, more concisely, 
        or in an alternative style that some may prefer.
        https://en.wikipedia.org/wiki/Syntactic_sugar
    (3) Helps writing codes as if writing a synchronous function
*/


//------------------------------------------------------------------------//
//------------------------------ 1. Async --------------------------------//
//------------------------------------------------------------------------//
// We want to create an asynchronous function for an operation that takes a while.
// (1) Async => turns the following code block into a promise. 
//     we don't have to exclusively say "promise"
async function fetchUser() {
    // for example, do network request in 10 seconds
    return "conan"; 
}

const user = fetchUser();
console.log(user); // console -> shows promise object



//------------------------------------------------------------------------//
//-------------------------- 2. Async + Await ----------------------------//
//------------------------------------------------------------------------//
// await can only be used inside an async function 
// (1) A delay function with a promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// (2) Async functions with await calling the function above
async function getConan() {
    await delay(1000);
   // throw 'error';
    return "Conan Obrien";
}
async function getTrevor() {
    await delay(2000);
    return "Trevor Noah";
}
// (3) ******** An async function to call two functions above ********
// (3-1) One way to call above funcs : It works, but similar to callback hell this way
// function getHosts() {
//     return getConan().then(conan => {
//         return getTrevor().then(trevor => `${conan} + ${trevor}`);
//     });
// }
// getHosts().then(console.log);

// (3-2) **** A better way, using async - await
async function getHosts() {
    // (1) get the values 
    const conan = await getConan();
    const trevor = await getTrevor();
    return `${conan} and ${trevor} are here.`;
}
getHosts().then(console.log);


// (3-3) Another example with an async function 


//------------------------------------------------------------------------//
//----------------------- 3. Useful Promise APIs--------------------------//
//------------------------------------------------------------------------//
// (1) Promise.all() - waits until all values received and get it in the Array 
function getAllHosts() {
    return Promise.all([getConan(), getTrevor()]) 
                  .then(hosts => hosts.join(" and "));
}
getAllHosts().then(console.log);

// (2) Promise.race() - Get the very first item that arrives in the Promised-Received array
function getJustOneHost() {
    return Promise.race([getConan(), getTrevor()]);
}
getJustOneHost().then(console.log);

