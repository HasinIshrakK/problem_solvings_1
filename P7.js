// Even Finding

let x = [1, 2, 2, 3, 4, 4];
let array = [];

for (const arr of x) {
    if (arr % 2 === 0)
        array.push(arr);
}

console.log(array);