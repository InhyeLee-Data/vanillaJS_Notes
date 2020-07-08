'use strict'; // When in Vanilla JS

// JSON in ES6
/*
Server Communication  ?

HTTP (Hyper Text Transfer Protocol) defines how Clients (web applications) communicate with a Server.
- Client : Data Request
- Server: Response
- Hypertext includes Links, Images, Docs...

A way to do 
- AJAX (Asynchronous JS and XML)
- XHR (XML Http Request) - Named by Microsoft, A little problem in naming as it can transfer more than XML

Browser - Server Communication
- XML Http Request 
- Fetch()
- JSON (Javascript Object Notation) => Browser / Mobile / File Saving

Why JSON is being so touted? 
(1) Simplest Data Interchange Format
(2) Lightweight Text-based Structure
(3) Easy to Read
(4) Key: Value Pairs
(5) Used for Serialization and Transmission of Data bet. Network Connection
(6) Can be used in different programming languages and platforms

*/



//------------------------------------------------------------------------//
//----------------------------1. Object to JSON --------------------------//
//------------------------------------------------------------------------//
// JSON.stringfy(obj) : Object can be boolean, array...
// (1) Boolean to JSON
let json1 = JSON.stringify(true); 
console.log(json1);
console.log(typeof json1); // string

// (2) Array to JSON
let json2 = JSON.stringify(['A', "B", "C"]);
console.log(json2);
console.log(typeof json2); // string

// (3) JS Object to JSON
const conan = {
    name: "Conan Obrien", 
    job: "Late Night Host",
    gender: "male", 
    network: "TBS", 
    dateOfBirth: new Date(), // for a testing purpose
    age: 57, 
    hasHostedOscar: true,
    // ********* How to add methods in a JS object
    // (0) An arrow function using "this" does not work. 
    //     As it will refer to the window itself. An arrow function can work, otherwise.
    test: () => {
        console.log(`Here, this won't print the "${this.name}"`);
    },
    //  ---- So we use the following two styles of methods
    // (1) key: value pair  === > key(function name) : val( function() {}  )
    stringDance: function() { 
        console.log(`(        "${this.name}" comes into the scene, doing his string dance.        )`); 
    }, 
    // (2) Using no key & value pair : Just create a named function
    openingMessage() {
        console.log(`Hi, "${this.name}" here. We have a great show tonight. We really do.`); 
    }
}

console.log("--- Executing Methods ---");
conan.test();
conan.stringDance();
conan.openingMessage();


console.log("--- Below, methods not shown as part of JSON ---")
let json3 = JSON.stringify(conan);
console.log(json3); // the method is not transferred upon JSON conversion


console.log("--- Below, a few keys can be selected in JSON conversion ---")
json3 = JSON.stringify(conan, ["name", "job", "network"]); // Can select a few keys only
console.log(json3); // the method is not transferred upon JSON conversion


console.log("--- Below, Key: Value Pairs. Methods also show up here. ---")
json3 = JSON.stringify(conan, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // Can add condition here if necessary
    // replacing the return value
    return key === 'network' ? "TBS better than NBC" : value ; 
    // return value; // Otherwise, set it to return all

});
console.log(json3);


//------------------------------------------------------------------------//
//----------------------------2. JSON to Object --------------------------//
//------------------------------------------------------------------------//
//console.clear();//
const json = JSON.stringify(conan); // obj to Json
const obj = JSON.parse(json); // Json to obj
console.log(obj);
// methods are not transferred



//------------------------------------------------------------------------//
//-------------------------------3. Resources ----------------------------//
//------------------------------------------------------------------------//

/*
    http://www.jsondiff.com/ 
    https://jsonbeautifier.org/
    https://jsonparser.org/ 
    https://www.minifyjson.org/

*/