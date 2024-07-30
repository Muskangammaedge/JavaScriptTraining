const person = {
    personName : "Steve Thomas",
    age :24,
    hobbies : "Coding"
};

console.log(person)
console.log("person's Name : ", person.personName)
console.log("person's age : ", person["age"])
let x = "hobbies"
console.log("person's hobby : ", person[x])
// adding property to object

person.experience = "2 year"
console.log("After adding property to function", person)
delete person.experience
console.log("after deleting exp.", person)

// adding function to object as a property 

person.skills = function(){
    return{
    manual : "Agile",
    automation : "Selenium"
    }
};
console.log("After adding function in an object ", person.skills())

const emp = {
    firstName : "Elija",
    lastName : "Maria",
    empId : 23,
    fullDetails : function(){
       return "Employee" + this.firstName + " " + this.lastName + "'s id is " + this.empId
    }
}
console.log("Employee  " , emp)
console.log("Employee full details : " , emp.fullDetails())

// looping in object 
const emp1 = {
    firstName : "Jas",
    lastName : "minaati",
    empId : 23
}
let text = "";
for(let i in emp1)
{
    text = text+emp1[i] + " ";
}
console.log(text)

//Object.values() creates an array from the property values:

const array = Object.values(emp1)
console.log("created array from the property values ", array)


