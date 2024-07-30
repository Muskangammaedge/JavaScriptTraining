// reduce will return a single value 
const arr = [120,10,5,5,6,4]
console.log(arr.reduce(myFun))
function myFun(total, num)
{
    return total- num
}
console.log(arr.reduce(myFun1))
function myFun1(total, num)
{
    return total + num
}

// Avg
const avg = arr.reduce((total,num,index, array) => total + num/array.length,0)
console.log(avg)

// product of two numbers 
const product = arr.reduce((total,num)=> total * num)
console.log(product)
