var Vector = function (components) {

    if (components === undefined || typeof components !== "object") {
        throw "Improper argument; need an array object";
    }

    const l = components.length;
    const sorted = components.sort();

    this.array = sorted;

    this.add = function (V1) {
        V1 = checkVectors(V1, l);
        let sum = [];
        for (let i = 0; i < l; i++)
            sum[i] = V1[i] + this.array[i];
        return new Vector(sum);
    };

    this.subtract = function (v1) {
        v1 = checkVectors(v1, l);
        let sum = [];
        for (let i = 0; i < l; i++)
            sum[i] = this.array[i] - v1[i];
        return new Vector(sum);
    };

    this.dot = function (v1) {
        v1 = checkVectors(v1, l);
        let sum = 0;
        for (let i = 0; i < l; i++)
            sum += this.array[i] * v1[i];
        return sum;
    };

    this.norm = function () {
        let norm = 0;
        for (let i = 0; i < l; i++)
            norm += Math.pow(this.array[i], 2);
        return Math.pow(norm, 0.5);
    };

    this.toString = function () {
        return "(" + components.toString() + ")";
    };

    this.equals = function (v1) {
        for (let i = 0; i < l; i++)
            return v1.array[i] === this.array[i];
    };
};

function checkVectors(v, expectedLength) {
    if (v === undefined || v.array === undefined) {
        throw "Invalid vector or undefined array.";
    }

    if (v.array.length === expectedLength) {
        return v.array.slice().sort();
    } else {
        throw "Mismatched vector sizes.";
    }
}

// Test cases
let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);

console.log(a.add(b).equals(new Vector([4, 6, 8])));
console.log(a.subtract(b).equals(new Vector([-2, -2, -2])));
console.log(a.dot(b));
console.log(a.norm());
console.log(a.toString());