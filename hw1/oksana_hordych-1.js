const prompt = require("prompt-sync")({sigint : true});

function addNumbers(x)
{
    let sum=0;
    for(let i= 0; i<x; i++)
    {
        if(i%3===0 || i%5===0)
        {
            // console.log(i + '\n')
            sum += i;
        }
    }
    return sum;
}

const userInput = prompt("Enter an integer: ");
const userInputAsNumber = parseInt(userInput);

const res = addNumbers(userInputAsNumber);
console.log("The sum of numbers divisible by 3 or 5 up to", userInputAsNumber, "is:", res);