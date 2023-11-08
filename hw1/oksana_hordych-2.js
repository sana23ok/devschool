const prompt = require("prompt-sync")({sigint : true});

function Hanoi(to, from, buff, n)
{
    let res = 0;
    if (n === 1)
    {
        console.log(from + " => " + to);
        res++;
    } else
    {
        res += Hanoi(buff, from, to, n - 1);
        console.log(from + " => " + to);
        res++;
        res += Hanoi(to, buff, from, n - 1);
    }

    return res;
}

const userInput = prompt("Enter an integer: ");
const userInputAsNumber = parseInt(userInput);

if (!isNaN(userInputAsNumber))
{
    let solution = Hanoi('A', 'B', 'C', userInputAsNumber);
    console.log("Total moves:", solution);
} else {
    console.log("Invalid input. Please enter a valid integer.");
}