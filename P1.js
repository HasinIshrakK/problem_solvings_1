// Reversing

let x = 'hello';
let array = [];
for (const a of x) {
    array.unshift(a);
    // console.log(array);
};
const str = array.join('');
console.log(str)