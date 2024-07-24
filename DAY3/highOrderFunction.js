function highOrderFunction(fun, num1,num2)
{
    return fun(num1, num2);
}

const sum = (a,b) => a+b;
console.log("Result " + highOrderFunction(sum,3,5))
