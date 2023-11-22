//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

console.log(person3)

for (const [key, value] of Object.entries(person3)) {
    if (Array.isArray(value)) {
        console.log(`${key}: `)
        value.forEach(thing => console.log(thing))
    } else{
        console.log(`${key}: ${value}`)
    }
}


//======= Exercise #2 =========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;
    

    // method inside of object prototype
    this.printInfo = () => {
        console.log(`Name ${this.name}, Age: ${this.age}`);
    }

    this.addAge = (years) => {
        this.age += years;
      };

      this.incrementAge = () => {
        this.age += 1;
      }

}

let person1 = new Person('George', 27);
let person2 = new Person('Chris', 33);

person1.printInfo()
person2.printInfo()

person1.addAge(3)
person1.printInfo()

person2.incrementAge()
person2.printInfo()

person2.incrementAge()
person2.printInfo()


// ============= Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve(str)
      } else {
        reject(str)
      }
    });
  }

  checkStringLength("Chimichanga")
    .then((result) => {
        console.log(`Big word: ${result}`)
    })
    .catch((error) => {
        console.log(`Small Number: ${error}`)
    })

    checkStringLength("Chimi")
    .then((result) => {
        console.log(`Big word: ${result}`)
    })
    .catch((error) => {
        console.log(`Small Number: ${error}`)
    })



// ====================== Code Wars ====================

// Write a function that accepts two parameters (sum and multiply) and find two numbers [x, y], where x + y = sum and x * y = multiply.

// Example:

// sum = 12 and multiply = 32

// In this case, x equals 4 and y equals 8.

// x = 4

// y = 8

// Because

// x + y = 4 + 8 = 12 = sum

// x * y = 4 * 8 = 32 = multiply

// The result should be [4, 8].

// Note:

// 0 <= x <= 1000

// 0 <= y <= 1000

// If there is no solution, your function should return null (or None in python).

// You should return an array (list in python) containing the two values [x, y] and it should be sorted in ascending order.

// One last thing: x and y are integers (no decimals).

// https://www.codewars.com/kata/59971206e06bbf4407002382/train/javascript


function sumAndMultiply(sum, multiply) {
    for (let x = 0; x <= 1000; x++) {
      for (let y = 0; y <= 1000; y++) {
        if (x + y === sum && x * y === multiply) {
          return [x, y].sort((a, b) => a - b)
        }
      }
    }
    
    return null
  }
  

  const result = sumAndMultiply(12, 32);
  console.log(result)


// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// https://www.codewars.com/kata/56dec885c54a926dcd001095/train/javascript


function opposite(number) {
    if (typeof number === 'number') {
      return -number;
    } else {
      return "Invalid input. Please provide a number.";
    }
  }
  
  
  const originalNumber = 14;
  const oppositeNumber = opposite(originalNumber);
  
  console.log(`Original number: ${originalNumber}`);
  console.log(`Opposite number: ${oppositeNumber}`);