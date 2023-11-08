function unpackSausages(truck)
{
    if (truck.length === 0) {
        return '';
    }

    const isSausagePackage = (package) => {
        if (package.length !== 6 || !package.startsWith('[') || !package.endsWith(']')) {
            return false;
        }

        const uniqueProducts = new Set(package.slice(1, -1));

        return uniqueProducts.size === 1;
    };

    const sausages = truck.flat(1).filter(isSausagePackage);

    const filteredSausages = sausages.filter((_, idx) => (idx + 1) % 5 !== 0).join('');

    const display = [...filteredSausages].filter(item => item !== '[' && item !== ']').join(' ');

    return display;
}

//
// const truck = [
//     ["(-)", "[IIII]", "[))))]"],
//     ["IuI", "[llll]"],
//     ["[@@@@]", "UwU", "[IlII]"],
//     ["IuI", "[))))]", "x"],
//     []
// ];

const prompt = require("prompt-sync")();

let inputString = prompt("Paste text: ");
const lines = inputString.split('\n').map(line => line.trim()).filter(line => line.length > 0);

const truck = [];

lines.forEach(line => {
    const sausages = line.match(/\[.*?\]/g);
    if (sausages) {
        truck.push(sausages.map(sausage => sausage.replace(/\[|\]/g, '')));
    }
});

console.log(unpackSausages(truck));