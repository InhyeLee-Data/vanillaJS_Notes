'use strict'; // When in Vanilla JS

// Array APIs 
/*

Other Useful Array-related APIs
And their real life usages.

*/



//------------------------------------------------------------------------//
//--------1. Array.join(): Make a single string out of an Array ----------//
//------------------------------------------------------------------------//
{
    const toys = ["car", "doll", "ball", "magic wand"];
    const sentence = toys.join(" "); // " ": separator
    console.log(sentence);
}



//------------------------------------------------------------------------//
//---------- 2. String.split(): Create an Array from a string ------------//
//------------------------------------------------------------------------//
{
    const sentence = "car doll ball magic_wand";
    const toys = sentence.split(" "); // " ": separator, limit : optional (how many items)
    console.log(toys);
}



//------------------------------------------------------------------------//
//--------- 3. Array.reverse(): Reverse the order of array items ---------//
//------------------------------------------------------------------------//
{
    const toys = ["car", "doll", "ball", "magic wand"];
    const toys2 = toys.reverse(); 
    console.log(toys2);
    console.log(toys); // ? the original order has also changed
}



//------------------------------------------------------------------------//
//------- 4. Array.slice(): Create a new array without a portion  --------//
//------------------------------------------------------------------------//
{
    const toys = ["car", "doll", "ball", "magic wand"];
    const fewerToys = toys.slice(2, toys.length); // slice(start, end - exclusive)
    console.log(fewerToys);
    console.log(toys); // my original array is not affected
}



//---------------------------------------------------------------------------------------//
//---- 5. Array.find(): Find the FIRST item in an array that meets certain criteria -----//
//---------------------------------------------------------------------------------------//
// (1) Let's create a Class
class LateNiteHost {
    //constructor data fields
    constructor(name, gender, network, age, hasHostedOscar) {
        this.name = name;
        this.gender = gender; 
        this.network = network;
        this.age = age;
        this.hasHostedOscar = hasHostedOscar; // To test out boolean
    }
    //methods omitted
}
// (2) Array made up of instances of LateNightHosts Class
const hosts = [
    new LateNiteHost("A Conan Obrien", "male", "TBS", 57, true),
    new LateNiteHost("B Jimmy Fallon", "male", "NBC", 45, true),
    new LateNiteHost("C Ellen DeGeneres", "female", "Not sure", 62, true),
    new LateNiteHost("D Trevor Noah", "male", "Comedy Central", 36, false)
];

console.log(hosts);

// (3) Let's find the first host who is over 39 yo
{
    const oldHost = hosts.find(function (host, index) {
        return host.age > 40; // Boolean value
        // console.log(host, index);
    });
    console.log("My Old Host is ", oldHost);

// (4) Let's find the first host who works for NBC
    const NBCHost = hosts.find(function (host, index) {
        return host.network === "NBC"; // Boolean value
        // console.log(host, index);
    });
    console.log("My NBC host is ", NBCHost);
}



//---------------------------------------------------------------------------------------//
//------ 6. Array.filter(): Make an array of ALL items that meet certain criteria -------//
//---------------------------------------------------------------------------------------//
{
    const selectedHosts = hosts.filter( (host) => {
        return host.age > 40 && host.hasHostedOscar  === true && host.gender === "male";
    })
    console.log("Male hosts over 40 that have hosted Oscar are ", selectedHosts); // Hosts that are over 40 and hosted Oscar
}



//-------------------------------------------------------------------------------------------------//
//------- 7. Array.map(): Make an array of values from ALL items that meet certain criteria -------//
//-------------------------------------------------------------------------------------------------//
// map() Can apply a function to all elements of Array
{
    // const selectedHostNames = hosts.map((host) => {return host.name;}); // Does the same
    const selectedHostNames = hosts.map((host) => host.name);
    console.log (selectedHostNames);

}



//-------------------------------------------------------------------------------------------------//
//------ 8. Array.some(): Check if there is an item in the array that meets certain criteria ------//
//-------------------------------------------------------------------------------------------------//
{
    // Do we have a female host?
    const haveFemaleHost = hosts.some( (host) => host.gender === "female");
    console.log (haveFemaleHost); // Yes we do
    // let's go back to print the person
    const femaleHostNames = hosts.filter( (host) => {
        if (host.gender === "female") {
            return host.name;
        }
    });
    console.log("female host name is ", femaleHostNames);

}



//-------------------------------------------------------------------------------------------------//
//------ 8. Array.every(): Check if there is ALL items in the array that meet certain criteria ----//
//-------------------------------------------------------------------------------------------------//
{
    // Is everybody female? 
    const haveFemaleHost = hosts.every( (host) => host.gender === "female");
    console.log (haveFemaleHost); // Nope. Not all
}



//-------------------------------------------------------------------------------------------------//
//--------------- 9. Array.reduce(): Get the accumulated numerical values of Array ----------------//
//-------------------------------------------------------------------------------------------------//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
// ********** Not too sure at this point ****** Half Understood
{
    console.clear(); 
    const totalHostAge = hosts.reduce((prev, curr) => prev + curr.age, 0);
    console.log(totalHostAge);
    const avgHostAge = totalHostAge / hosts.length;
    console.log(`The average age of ${hosts.length} late Night hosts is ${avgHostAge}`);
}



//------------------------------------------------------------------------------------------------------//
//------ 10. toString() && arr.join(): Make a single String containing all the numerical values --------//
//------------------------------------------------------------------------------------------------------//
// (1) First, convert all nums to strings
// (2) Second, Join these strings together
{
    // (1) One way to achieve it
    // const ageToString = hosts.map((host) => host.age.toString());
    // console.log(ageToString);
    // const ageSentence = ageToString.join(", ");
    // console.log(ageSentence);

    // (2) Another way (Better way) to Achieve it via Chained functions //// No need to convert to string
    const result = hosts.map((host) => host.age).join();
    console.log(result);

    // (3) *** Chained operations: map -> filter -> join 
    const hostAgeOver45 = hosts
    .map((host) => host.age)
    .filter((age) => age >= 45)
    .join();
    console.log(hostAgeOver45);
}


//------------------------------------------------------------------------------------------------------//
//------------------------ 11. arr.sort() : Sorting items in Array in Ascending Order ------------------//
//------------------------------------------------------------------------------------------------------//
{
    const hostAgeSorted = hosts
    .map((host) => host.age)
    .sort()
    .join(); // toString -> join
    console.log(hostAgeSorted); // .reverse() can be added for sorting in a descending order

}