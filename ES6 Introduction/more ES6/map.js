// map use in array use normal funtion
function doubleIt(params) {
    return params * 2;
}
const arr = [23, 45, 78, 90, 65, 43, 56]
const result = arr.map(doubleIt);
console.log(result);


// map use in array use arrow funtion
const doubleIt2 = (params) => params * 2;
const arr2 = [23, 45, 58, 10, 65, 43, 26]
const result2 = arr2.map(doubleIt2);
console.log(result2);


// more shortcut way to map use in array..
const number = [23, 26, 37, 47, 63, 74]
const output = number.map((e) => e * 2)
console.log(output);


// more and more shortcut way to map use in array..
const number2 = [23, 26, 37, 47, 63, 74]
console.log(number2.map((params) => params * 2))


// more and more shortcut way to map use in array..
console.log([20, 45, 54, 78, 29].map((params) => params * 2))

// more and more shortcut way to map use in array..calculate squer
console.log([20, 45, 54, 78, 29].map((params) => params * params))
