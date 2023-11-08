const prompt = require("prompt-sync")();

function maxmin(numbers)
{

    const numArray = numbers.split(" ").map(Number);
    const max = Math.max(...numArray);
    const min = Math.min(...numArray);

    return `${max} ${min}`;
}

const userInput = prompt("Enter integer: ");
console.log(maxmin(userInput));
