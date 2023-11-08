function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        return str.split("").map((symbol, i) => {
            if (abc.includes(symbol)) {
                const inputCharacterIndex = abc.indexOf(str[i % str.length]);
                const keyCharacterIndex = abc.indexOf(key[i % key.length]);
                return abc[(inputCharacterIndex + keyCharacterIndex) % abc.length];
            }
            return symbol;
        }).join("");
    };

    this.decode = function (str) {
        return str.split("").map((symbol, i) => {
            if (abc.includes(symbol)) {
                const encryptedCharacterIndex = abc.indexOf(str[i % str.length]);
                const keyCharacterIndex = abc.indexOf(key[i % key.length]);
                return abc[((encryptedCharacterIndex - keyCharacterIndex) + abc.length) % abc.length];
            }
            return symbol;
        }).join("");
    };
}

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key = 'password';
let c = new VigenèreCipher(key, alphabet);
console.log(c.encode('codewars')); // Output: 'rovwsoiv'
console.log(c.decode('laxxhsj')); // Output: 'waffles'
