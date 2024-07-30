const arr = ["Apple", "Banana", "Lemon", "kiwi", "Pineapple", "Lichi"];
console.log("Actual Array : " , arr)
let sArray = arr.splice(2,3,"t1", "t2") 
// starting from index 2 and count from index 2 to index 4 is 3 so it will remove 3 items & add t1 t2 in plcase of them 
console.log("Spliced array : " , arr)
console.log("Removed items  : " , sArray)

const arr2 = ["A1", "A2", "A3", "A4"]
arr2.splice(0,1)
console.log(arr2)

const arr3 = ["A1", "A2", "A3", "A4"]
arr3.splice(0,1,"Test")
console.log(arr3)

