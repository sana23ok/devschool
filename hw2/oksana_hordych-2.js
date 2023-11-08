const prompt =
    require("prompt-sync")({sigint : true});
function findIndex(array)
{
    let sum = 0;

    for (let i = 0; i < array.length; i++)
    {
        sum += array[i];
    }

    let half = 0;

    for (let i = 0; i < array.length; i++)
    {
        if (half === (sum - array[i]) / 2)
        {
            return i;
        }
        half += array[i];
    }

    return -1;
}

const inputString = prompt("Enter a space-separated string of numbers:")
const stringArray = inputString.split(" ");
const intArray = stringArray.map(Number);

console.log(findIndex(intArray));