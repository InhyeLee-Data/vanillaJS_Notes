'use strict';

// What is a JS OBJECT?
/*

(1) The Object class represents one of JavaScript's data types.
(2) It is a collection of "related" data and or functionality.
(3) Basic structure: Object = {key: value };

*/

//------------------------------------------------------------------------//
//-------------------- 1. Literals and Properties-------------------------//
//------------------------------------------------------------------------//
//(1) There are two Different ways to create an object
const obj1 = {}; // [1] Object Literal { }
const obj2 = new Object(); // [2] Object Constructor syntax "new"

// (2) To Compare Object and Non-Object //
// This following part uses no Object - Multiple variables and a function //
const name = "conan";
const age = 100;

function print (name, age) {
    console.log(name);
    console.log(age);
}

print(name, age);

// (3) Here is Another way to do the same Via Object literal
// This way, all information about Conan is stored in one place
const conan = {
    name: "conan",
    age: 100,
};

function printP(person) {
    console.log(person.name);
    console.log(person.age);
}

printP(conan);

// (4) In JS, Object Properties can be dynamically added, on the spot.
conan.hasJob = true; 
console.log(conan.hasJob); 

// (5) property is also deletable
// delete conan.hasJob;
// console.log(conan.hasJob);  


//------------------------------------------------------------------------//
//------------------------ 2. Computed Properties-------------------------//
//------------------------------------------------------------------------//
console.log(conan.name); // (1) Use this when coding: Accessing it with dot Notation 
console.log(conan["name"]); //(2) Computed Property: Accessing the same info with the array form
console.log(conan.hasJob);
console.log(conan["hasJob"]); // "Key string" needs a quote here

function printVal (obj, key) {
    // console.log(obj.key); // This doesnt work, as the key is not created yet at the time of coding 
    console.log(obj[key]) // However, this Works, because we can access the key as a computed Property, using the later input string as the key
}

printVal (conan, "name");
printVal (conan, "key");


//------------------------------------------------------------------------//
//-------------------- 3. Property Value Shorthand------------------------//
//------------------------------------------------------------------------//
const member1 = {name: "Jimmy", age: 10};
const member2 = {name: "Oprah", age: 15};
const member3 = {name: "Trevor", age: 20};
// So far, we kept repeating to write the same structure.
// To make it more efficient, we can use property value shorthand.
const member4 = makeMember("John", 25); 

// Use this function so we don't have to repeat exact same key writing
// This is close to what Class does
function makeMember(name, age) {
    return { // Return these two;
        name, // name: name - Here, we can omit the key: value when the value is named same as the key
        age  // This is called property value shorthand
    }
}
console.log(member1,member2, member3, member4);


//------------------------------------------------------------------------//
//----------------------- 4. Constructor Function ------------------------//
//------------------------------------------------------------------------//
// We can create an object by calling a constructor function. //
// Very similar to a Class. Name Starts with a CAPITAL letter. // 
const member5 = new Member("Pearson", 30); 
function Member(name, age) { 
    // It creates an object { }
    this.name = name; // Using this. notation
    this.age = age;
    // Then returns this object
}
console.log(member5);


//------------------------------------------------------------------------------------------//
//---------------------- 5. "in" Operator (Property Existence Check) -----------------------//
//------------------------------------------------------------------------------------------//
// "Key" in Object // 
console.log("name" in member5); // Yes, this property exists
console.log("job" in member1); // No, this property does Not Exist
console.log(member1.job) // Undefined key


//------------------------------------------------------------------------------------------//
//-------------------------------- 6.  For ... in && For ... of ----------------------------//
//------------------------------------------------------------------------------------------//
// (1) for (key in Obj) //
console.clear(); // This Clears console
console.log(member1);

const toto = {
    name: "toto",
    age: 35
}

for (let key in toto) {// Not working if "let" under 'use strict' not used
    console.log(key);
} 

// (2) for (value of iterable) //
const array = [1,2,3,4];
// Comparison -  When Using for loop 
for (let i =0; i <array.length; i++) {
    console.log(array[i])
}
// When using For of => Much shorter to iterate
for (let val of array) {
    console.log(val);
}


//------------------------------------------------------------------------------------------//
//-------------------------------- 7. Object Cloning ----------------------------//
//------------------------------------------------------------------------------------------//
// Object.assign(dest, [obj1, obj2,....])
// (1) Referencing the Same object by assigning a new variable
const user1 = {name: "alexander", age: "500"};
const user2 = user1; // Copy => Referencing the same place in memory
user2.name = "eric"; // Assigning a new name for user2
console.log(user1); // The value has changed for user1 as well. 

// (2) The old way 
const user3 = {};
for (let key in user1) {
    user3[key] = user1[key]; // Copying the keys
} 
console.log(user3);

// (3) *** Object.assign 
//  - (3-1) One way to clone via Object.assign
// const user4 = {};
// Object.assign(user4, user1); // target, source
// - (3-2) Another way to clone via Object.assign
const user4 = Object.assign({}, user1) // One liner -> A way to Go
console.log(user4);

// (4) This is how to Create an object by mixing multiple objects
const shirt1 = {color: "blue"};
const shirt2 = {color: "yellow", size: "small"};
const mixedShirt = Object.assign({}, shirt1, shirt2);
console.log(mixedShirt.color);
console.log(mixedShirt.size);
// The later added object overwrites the property of the previously added for the new object.
