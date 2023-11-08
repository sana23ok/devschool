function groupAnagrams(words)
{
    const result = [];
    const dict = {};

    for (const word of words)
    {
        const sortedWord = word.split('').sort().join('');
        dict[sortedWord] ? dict[sortedWord].push(word) : dict[sortedWord] = [word];
    }

    for (const val of Object.values(dict))
    {
        result.push(val);
    }

    return result;
}

const prompt =
    require("prompt-sync")({sigint : true});

const inputString = prompt("Enter words separated by space: ")
const inputWords = inputString.split(" ");
// const inputWords = ["tsar", "rat", "tar", "star", "tars", "cheese"];
const groupedAnagrams = groupAnagrams(inputWords);
console.log(groupedAnagrams);
