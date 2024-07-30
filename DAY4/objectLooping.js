const organization = {
    orgName : "xyz pvt. limited",
    noOfEmployee : 50,
    location : "23, test street",
    contactNo : 7826567893,
}
// for in loops iterates over values of objext
console.log("Result of for in loop : ")
for (let i in organization)
{
    console.log(organization[i])
}
// for of can't be used in object it will throe TypeError: organization is not iterable
console.log("Result of for of loop : ")
for (let j of organization)
{
    console.log(organization[j])
}

