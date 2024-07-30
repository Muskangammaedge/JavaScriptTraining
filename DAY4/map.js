// creates a new array from calling a function for every array element.

const numbers = [12,23,44,56,66,67]
console.log(numbers.map(myfun))
function myfun(num){
return num*10;
}

const arr = [23,34,55,66,66,77]
console.log(arr.map(Math.sqrt))

function func1(num)
{
    return(num)
}