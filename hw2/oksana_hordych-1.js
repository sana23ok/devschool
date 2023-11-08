const prompt =
    require("prompt-sync")({sigint : true});

function largestRadialSum(arr, d) {
    const dist = Math.floor(arr.length / d);
    const rad = [];

    for (let i = 0; i < dist; i++) {
        const radial = [];
        for (let j = i; j < arr.length; j += dist) {
            radial.push(arr[j]);
        }
        rad.push(radial);
    }

    const radialSums = rad.map(radial => radial.reduce((acc, current) => acc + current));
    return Math.max(...radialSums);
}

//test function
const inputString = prompt("Enter a space-separated string of numbers:")
const stringArray = inputString.split(" ");
const intArray = stringArray.map(Number);
const d= parseInt(prompt("Enter d:"));
console.log(largestRadialSum(intArray, d));
