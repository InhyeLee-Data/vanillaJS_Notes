'use strict'; // When in Vanilla JS

// What is an Array?
/*

(1) Array is a data structure that contains similar types of objects.
- JS being dynamically typed language, it could contain multiple types, but not recommended.
(2) There is an index for each item. Staring from Zero.
(3) It is easy to insert and remove an item by accessing it by an Index.

*/


//------------------------------------------------------------------------//
//-----------------------  1. Array Declaration --------------------------//
//------------------------------------------------------------------------//
const arr1 = new Array();
const arr2 = [1,2,3];


//------------------------------------------------------------------------//
//--------------------------  2. Index Position --------------------------//
//------------------------------------------------------------------------//
const toys = ["car", "doll", "ball", "magic wand"];
console.log(toys.length);
console.log(toys[0]);  // Accees it by index 
console.log(toys[5]);  // When non existent => Undefined
console.log(toys[toys.length-1]); // *** The last item


console.clear(); // Clears the console window


//------------------------------------------------------------------------//
//-----------------  3. Looping thru an array - Iterables ----------------//
//------------------------------------------------------------------------//
// (1) for loop 
for (let i = 0; i < toys.length ; i++) {
    console.log(toys[i])
}

// (2) for of
for (let toy of toys) {
    console.log(toy);
}

// (3) forEach - Receiving a callback function
toys.forEach( toy => {
    console.log(toy)
});

// (4) forEach - Shorter 
toys.forEach( (toy) => console.log(toy)); 
// toys.forEach( (toy, index, array) => console.log(toy, index, array)); // index, array not needed



//------------------------------------------------------------------------//
//--------------------  4. Addition, Deletion, Copy ----------------------//
//------------------------------------------------------------------------//
// (1) Add an item to the end
toys.push("BB");
console.log(toys);
// (2) Remove from the end
toys.pop(); // Remove the last item
console.log(toys); 
// (3) Add an item to the beginning: Unshift - 
toys.unshift("BB");
console.log(toys); 
// (4) Remove from  the beginning: Shift 
toys.shift();
console.log(toys); 
// ::: Shift & Unshift is much slower than push pop, as all index-item have to change */

// (5) Splice - Remove an item with an index
// toys.splice(1, 1); // splice(start index, how many items)
// console.log(toys); 
toys.splice(1, 0, "CC", "Toto");  // start index, how many items to delete(0), Newly added items 
console.log(toys); 


//------------------------------------------------------------------------//
//------------------------  5. Concat : Combining  -----------------------//
//------------------------------------------------------------------------//
// Combining two Arrays
const toys2 = ["Yara", "Blah"];
const newToys = toys.concat(toys2);
console.log(newToys);



//------------------------------------------------------------------------//
//--------------------------  6. Search in Array -------------------------//
//------------------------------------------------------------------------//
// indexOf, includes (Boolean)
console.clear(); // Clears the console window
console.log(toys.indexOf("CC")); // Index
console.log(toys.includes("CC")); // Boolean - True
console.log(toys.includes("Barbie")); //Boolean - False
console.log(toys.indexOf("Barbie"));  // Not included => -1

// indexOf (First appearance) VS lastIndexOf (Last Appearance)
toys.splice(3,0, "CC"); // let's include anohter item of "CC"
console.log(toys); // toys[] contains two "CC"
console.log(toys.indexOf("CC"));
console.log(toys.lastIndexOf("CC"));