function isPrime(num)
{
factor = 0;
for(let i =1;i<=num;i++)
{
    num%i === 0;
    factor++;
}
if(factor === 2)
{
    return true;
}
else
{
    return false;
}
}
console.log("Result = ", isPrime(2))