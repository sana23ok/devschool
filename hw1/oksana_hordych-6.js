const prompt = require("prompt-sync")();


function parser(n)
{
    let strN = "" + n;
    let digitsArray = strN.split("");

    digitsArray.sort(function(a, b) {
        return b - a;
    });

    let sortedStr = digitsArray.join("");
    let result = Number(sortedStr);
    return result;
}

const userInput = prompt("Enter a positive integer: ");
const n = parseInt(userInput);
console.log(parser(userInput));

