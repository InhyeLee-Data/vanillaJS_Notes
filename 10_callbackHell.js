'use strict'; // When in Vanilla JS

// callback HELLs without Promise
/*

- THESE ARE THE BAD EXAMPLES that we want to avoid -
  Later, we'll rewrite this with Promise.

*/

//------------------------------------------------------------------------//
//--------------------------- 1. Class Set Up ----------------------------//
//------------------------------------------------------------------------//

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout( () => { // Fake function to get a user ID & Password
            if (  
                (id === "conan" && password === "stringDance") ||
                (id === "jimmy" && password === "musicJeopardy")
            ) {
                onSuccess(id); // passing id
            } else {
                onError(new Error("Not Found"));
            }
        }, 1000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout( () => { // Fake function to getRoles
            if (user === "conan") {
                onSuccess( {name: "conan", role: "Conaco CEO"} );
            } else {
                onError(new Error ("You don't have access."))
            }
        }, 500);
    }
}



//------------------------------------------------------------------------//
//-------------- 2. Let's create a Callback Chain Hell -------------------//
//------------------------------------------------------------------------//
//  ------------ PLAN ------------  //
// (1) Receive ID & Password from a user
// (2) Login with that information
// (3) Get a Role for the user 
//----------------------------------//
const userStorage = new UserStorage();
const id = prompt ("Enter your ID"); // Window API
const password = prompt ("Enter your Password");
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRoles => { 
                alert(`Hello, ${userWithRoles.name}, you are a ${userWithRoles.role}.`);
            },
            error => { 
                console.log(error);
            }
        )
    },
    error => {
        console.log(error);
    }
) 
//  ------------ What are the PROBLEMS ? ------------  //
// (1) Codes NOT Easy to Read - Too Nested
// (2) Hard to Understand the business Logic
// (3) Difficult to handle errors.  Where do errors happen??
// (4) Hard to maintain the code.