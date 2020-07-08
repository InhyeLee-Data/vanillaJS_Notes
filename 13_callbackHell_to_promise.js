'use strict'; // When in Vanilla JS

// Using Promise  
/*
    Rewrite 10_callbackHell.js 
    with Promise.

*/

//------------------------------------------------------------------------//
//---------1. Class Set Up with Promise & setTimeout (No callback---------//
//------------------------------------------------------------------------//
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout( () => { // Fake function to get a user ID & Password
                if (  
                    (id === "conan" && password === "stringDance") ||
                    (id === "jimmy" && password === "musicJeopardy")
                ) {
                    resolve(id); // Pass this info => to the next chain
                } else {
                    reject(new Error("User Not Found")); // Error Handling
                }
            }, 1000);
        })
    }

    getRoles(user) {
        return new Promise ((resolve, reject) =>{
            setTimeout( () => { // Fake function to getRoles
                if (user === "conan") {
                    resolve( {name: "conan", role: "Conaco CEO"} ); // Pass this info =>
                } else {
                    reject(new Error ("Sorry. You don't have access."))  
                }
            }, 500);
        })
        
    }
}



//------------------------------------------------------------------------//
//-------------- 2. Rewrite the data consumer using the async  -----------//
//------------------------------------------------------------------------//
const userStorage = new UserStorage();
const id = prompt ("Enter your ID"); // prompt(): Window API
const password = prompt ("Enter your Password");

userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello, ${user.name}, you are a ${user.role}.`))
    .catch(console.log);

