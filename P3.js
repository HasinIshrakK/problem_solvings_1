// Palindrome Checking

let x = 'madam madam';
let array = [];
for (const a of x) {
    array.unshift(a);
    // console.log(array);
};
const str = array.join('');
let isPalindrome = false
if (str === x) {
    isPalindrome = true;
};
console.log(isPalindrome);