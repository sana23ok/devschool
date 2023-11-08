const prompt = require("prompt-sync")({sigint : true});
function findNb(m)
{
    let sum = 0;
    let n = 1;

    while (sum < m)
    {
        sum += Math.pow(n, 3);
        if (sum === m)
        {
            return n;
        }
        n++;
    }

    return -1;
}

const userInput = prompt("Enter an integer: ");
const userInputAsNumber = parseInt(userInput);

let solution = findNb(userInputAsNumber);

