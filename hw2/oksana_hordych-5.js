
function getRootProperty(object, val) {
    const keys = Object.keys(object);
    let i = 0;

    while (i < keys.length) {
        const key = keys[i];

        if (Array.isArray(object[key])) {
            if (object[key].includes(val)) {
                return key;
            }
        } else if (getRootProperty(object[key], val)) {
            return key;
        }

        i++;
    }

    return null;
}

// object = {
//     "r1n": {
//         "mkg": {
//             "zma": [21, 45, 66, 111],
//             "mii": {
//                 "ltf": [2, 5, 3, 9, 21]
//             },
//             "fv": [1, 3, 6, 9]
//         },
//         "rmk": {
//             "amr": [50, 50, 100, 150, 250]
//         }
//     },
//     "fik": {
//         "er": [592, 92, 32, 13],
//         "gp": [12, 34, 116, 29]
//     }
// }

const prompt = require("prompt-sync")();
const jsonString = prompt("Paste object as JSON string: ");
const object = JSON.parse(jsonString);

console.log(getRootProperty(object, 250)); //=> "r1n"
console.log(getRootProperty(object, 116)); //=> "fik"
console.log(getRootProperty(object, 111)); //=> "r1n"

