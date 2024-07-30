empArray = ["dev", "Pragya", "jigs", "ukti"]

// for loop
for (let i =0;i<empArray.length;i++)
{
    console.log(empArray[i])
}

// for in loop 

for (let j in empArray)
{
    console.log(empArray[j])
}

// for of loop
for (let k of empArray)
{
   // console.log(empArray[k]) // this will print undefined
    console.log(k)
}