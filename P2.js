// Vowel Counting

let x = 'hEllo';
let array = ["a", "e", "i", "o", "u"];
let count = 0;
for (const a of x) {
    for (arr in array) {
        if (a.toLowerCase() === array[arr]) {
            count++;
        }
        // console.log(a, array[arr])
    }
};
console.log(count);