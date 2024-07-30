const array = [34,45,66,77,78,23,2,8]
console.log("Even Numbers " , array.filter(myFunc))

function myFunc(a){
    if(a%2==0)
    {
        return a;
    }
}

// Filter positive numbers 
const array1 = [34,45,-66,77,-78,23,-2,8,0]
const positiveNumbers = array1.filter(num => myFun1(num) === "positive");
const negativeNumbers = array1.filter(num => myFun1(num) === "Negative");
const zeroNumbers = array1.filter(num => myFun1(num) === "Zero");


console.log("postive Numbers " , positiveNumbers)
console.log("Negative Numbers", negativeNumbers)
console.log("Zero Numbers", zeroNumbers)

function myFun1(num)
{
    if(num>0)
    {
        return "positive"
    }
    else if(num<0)
    {
        return "Negative"
    }
    else
    {
        return "Zero"
    }
}

// Given an array of strings, filter out all strings that have an even number of characters.

const strArray = ["Test", "John", "Steve", "Thomas"]
const sArray = strArray.filter(n1 => n1.length%2 === 0)
console.log("Strings having even no of characters ", sArray)