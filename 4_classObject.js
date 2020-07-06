'use strict'; // When in Vanilla JS

// What is a Class?
/*

(1) Class is a container.
It is a collection of
related fields (data) and methods. 
There are classes without methods, which only contain data fields.
-> Data Class

(2) Class VS Object
Class - Template (Cookie cutter)
Object - An Instance made from the template (Cookie)

Class - Defined. No Memory is Designated.
Object - Created. Memory is Assigned. 

(3) JS Class was Introduced in ES6
- Kind of a fake 

*/


//------------------------------------------------------------------------//
//-----------------------  1. Class Declaration --------------------------//
//------------------------------------------------------------------------//
console.log("1. Class Declaration")
class Human {
    //(1) constructor: The bare minimum data to create a new instance
    constructor(_name, _age) { // _ underscore  for this temporary variableis optional. Some use, some don't
        //data fields
        this.name = _name;
        this.age = _age;
    }

    //(2) methods
    speak() {
        console.log(`Hello, ${this.name}. Isn't it crazy you're ${this.age} years old?!`)
    }
}
const inhye = new Human("Inhye", Math.floor(Math.random()* 100)); // new Classname() -> Instantiation
inhye.speak();


//------------------------------------------------------------------------//
//------------------------- 2. Getter and Setter -------------------------//
//------------------------------------------------------------------------//
// Get and Set is used so the basic class properties are protected from a wrong user input //
console.log("2. Class - Getter and Setter")
class User {
    /**
     * Create a user
     * @param {String} firstName Get a person's first name 
     * @param {String} lastName  Get a person's last name 
     * @param {int} age If negative, default to Zero
     */
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // get propertyname(): For a property that needs a special care
    // In this case, it will be "age"
    get age() {  
        // Get Binds an object property to a function that will be called 
        return this._age; // this._propertyname
    }
    // set propertyname(): sets it to default value when wrong input comes in
    set age(value) {
        this._age = value <= 0 ? 1 : value; // this._propertyname
    }
}

const user1 = new User("Conan", "Obrien", 50);
console.log(user1);

const user2 = new User("Jimmy", "K", -2);
console.log(user2); // Default the age to 0
console.log(`user2's first name is ${user2.firstName}`);


//------------------------------------------------------------------------//
//--------------------  3. Fields (Public, Private) ----------------------//
//------------------------------------------------------------------------//
// A recent Addition. Not being used very much. Have to use Babel.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
console.log("3. Fields (Public, Private #)")
class Experiment {
    //Without using a constructor
    publicField = 2; // Accessible
    #privateField = 0; // Not accessible 
}

const experiment = new Experiment();

console.log(experiment.publicField);
console.log(experiment.privateField);



//------------------------------------------------------------------------//
//-----------------  4. Static Properties and Methods --------------------//
//------------------------------------------------------------------------//
// Another recent addtion. Not being used very much
console.log("4. Static Properties and Methods")
class Article {
    static publisher = "Tomato publishing"; // static is Assigned to the Class itself
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }

}

const article1 = new Article(1);
console.log(article1);
console.log(Article.publisher); // Pertains to the whole class // Memory Saving
Article.printPublisher(); // Can call the static function like this - ClassName.StaticFunction()



//------------------------------------------------------------------------//
//--------------------  5. Inheritance and Diversity ---------------------//
//------------------------------------------------------------------------//
// One class can Extend Another Class and add more behavior
console.log("5. Inheritance and Diversity")
class Shape {
    constructor (_width, _height, _color) {
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    draw() {
        console.log(`Drawing ${this.color} color`)
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {
}

class Triangle extends Shape {
    draw() {
        super.draw(); // super.functionName() inherits everything from the parent
        console.log ("Triangle"); // And can add more to it
    }
    getArea() { // Without super, overwrites the method that needs updating
        return this.width * this.height /2;
    }
}

const rect1 = new Rectangle(20, 20, "black");
const triangle1 = new Triangle(20, 20, "grey");
rect1.draw();
console.log(rect1.getArea()); // It didnt have a return value
triangle1.draw();
console.log(triangle1.getArea());


//------------------------------------------------------------------------//
//---------------------------  6. Instance of ----------------------------//
//------------------------------------------------------------------------//
// Boolean value to check whether an object is an instance of a class
console.log("6. Instance of")

console.log(rect1 instanceof Rectangle); 
console.log(rect1 instanceof Shape); 
console.log(rect1 instanceof Triangle); 
console.log(rect1 instanceof Object);  // All object classes are inheriting Object in javascript