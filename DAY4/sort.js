const fruits = ["Mango","Kiwi","Banana", "Orange","Apple"]
console.log("Sorted Array : ", fruits.sort())

console.log("reversed Array : ", fruits.reverse())

// Numeric sort 
const numbers = [45,22,11,8,53,12,0]
numbers.sort(function(a,b){ return a-b})
console.log("Ascending order sorting : " , numbers)

//descending order
const num = [3,67,89,93,2,8,100]
num.sort(function(a,b){
    return b-a;
})
console.log("descending order sorting : ", num)


