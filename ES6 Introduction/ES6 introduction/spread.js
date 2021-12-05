// array spread
const numbers = [34, 45, 56, 78, 89, 76, 36, 56, 71];
const max = Math.max(...numbers);
console.log(max);

//shortcut way to max valu find out use spread array
console.log(Math.max(...[34, 21, 45, 67, 42, 56, 98, 31]))

// create new array and spread old array value...
const numbers2 = [10, 20, ...numbers, 150, 155];
numbers.push(100)
console.log(numbers);
console.log(numbers2);