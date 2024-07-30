const arr = ["A1", "B1", "C1", "D1", "E1"]
console.log("Actual array ",  arr)
console.log("Length of array ", arr.length)
arr.push("F1")
console.log("Array after pushing an element to array", arr)
arr.pop();
console.log("After pop :", arr)
arr.shift()
console.log("Shift : removes first element from array :" , arr)
arr.unshift("U1")
console.log("Unshift : add a new element at first index :", arr )
// delete arr[1];
// console.log("Delete : deletes an elements bt blank space will be present at that index " + arr);
let joinedArray = arr.join(" * ")
console.log("Join :results an array to string "+ joinedArray)
arr1 = [10,20,30,40,50]
console.log("Concat : " , arr.concat(arr1))
arr2 = [[10,20],[30,40],[50,60]]
console.log("Flat : Converts multi dimension array into single dimension ",  arr2.flat())

arr3 = [1,2,3,4,5,5]
console.log("To string : " , arr3.toString())

// Find method 
const numbers = [1, 2, 3];
const foundNumber = numbers.find(number => number > 2);

console.log(foundNumber); // Output: undefined
