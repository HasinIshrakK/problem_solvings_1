// Capitalizing

let x = 'hello world';
let array = x.split(" ");
let newArr = [];

for (arr in array) {
    const a = array[arr].charAt(0).toUpperCase() + array[arr].slice(1);
    newArr.push(a);
}
// console.log(newArr);

const str = newArr.join(" ");

console.log(str)