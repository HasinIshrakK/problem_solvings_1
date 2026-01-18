// Sum

const arr = [1, 2, 5, 10, 8, 145, 21, 18];
let sum = 0
for (const x in arr) {
    sum = sum + parseFloat(arr[x]);
    // console.log(sum)
};

console.log(sum);