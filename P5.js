// Duplicate Removing

let x = [1, 2, 2, 3, 4, 4];
let array = [];
let count = 0;

for (const arr in x) {
    const num = x[arr];
    if (!array.includes(num))
        array.push(num);
}

console.log(array);