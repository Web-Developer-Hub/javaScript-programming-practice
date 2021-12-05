// map use in array...
const number = [23, 34, 56, 67, 78, 89].map((number) => number / 7);
console.log(number)

//map use in array...
const age = [23, 14, 17, 24, 27, 35, 26].map((age) => ((age * 2) / 2) + 10)
console.log(age);

// use filtter in array
const age2 = [23, 32, 45, 67, 54, 34].filter((age) => age > 40)
console.log(age2);

// use filtter in array
const age3 = [23, 32, 45, 67, 54, 34].filter((age) => age > 40 || age < 40)
console.log(age3);

// use filtter in array
const age4 = [23, 32, 45, 67, 54, 34].filter((age) => age > 40 && age > 40)
console.log(age4);

//use find in array...
const number2 = [34, 32, 36, 56, 76, 64].find((num) => num < 40);
console.log(number2);

//use find in array...
const number3 = [34, 32, 36, 56, 76, 64].find((num) => num > 50);
console.log(number3);

// foreach in an array
const result = [89, 81, 98, 87, 79, 82, 93]
result.forEach(element => {
    console.log(element)
});
