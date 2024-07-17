console.log("Hello Word")

// Variable 
var x = 10;
let y= 20;
const z = 30;

// Var : block specific & can be use outside the block
{
    var v1 = 5;
}
console.log(v1+5); 

// let : block specific & can't be use outside the block
{
    let v2 = 2;
}
console.log(v2+2)

// const : block specific & can be use outside the block
{
    const v3 = 5;
    
}
console.log(v3*3); 


// Data Types 

var fName = "Muskan";
console.log(typeof(fName))
let age = 24;
console.log(typeof(age))
const isEmployee = true;
console.log(typeof(isEmployee))
let height = null;
console.log(typeof(height))
let weight;
console.log(typeof(weight))
let person = {
    firstName: "Muskan",
    lastName: "Trivedi"
};
console.log(typeof(person))
let cars = ["Saab", "Volvo", "BMW"];
console.log(typeof(cars))

// basic operations
let sum = age + 5;
let diff = age - 5;
let product = age * 2;
let div = age * 2;
let rem = age % 2; 
console.log(`Sum: ${sum},
Diff: ${diff},
Product : ${product} , 
Division : ${div}, 
Reminder : ${rem}`)
let isEqual = (age == 24)
let isNotEqual = (age != 24)
let isGreater = (age > 24)
let isless = (age < 24)
console.log("Basic Operations : ",isEqual,
isNotEqual,
isGreater, 
isless)






let fullName = fName + " Doe";
let isAdult = age > 18;
let isTall = height || 170;

