const prompt = require("prompt-sync")
    ({sigint : true});

function isPrime(x)
{
    let squareNum = Math.sqrt(x);
    if(x < 2)
    {
        return false;
    }

    if(x === 2 || x === 3 || x === 5 || x === 7)
    {
        return true;
    }

    if(x % squareNum === 0)
    {
        return false;
    }

    for(let i = 2; i <= squareNum; i++)
    {
        if(x % i === 0)
        {
            return false;
        }
    }

    for(let i = 2; i <= squareNum; i++)
    {
        if(x % i !== 0)
        {
            return true;
        }
    }

}

const userInput = prompt("Enter an positive integer: ");
const lim = parseInt(userInput);

const primeNumbers = isPrime(lim);
console.log("Prime numbers up to " + lim + ":");
console.log(primeNumbers);

