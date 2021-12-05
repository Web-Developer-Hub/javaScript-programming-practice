// array silce, but original array are not change..always seme...
const number = [23, 45, 67, 87, 89, 99, 34, 78, 82];
const numberSlice = number.slice(2, 7);
console.log(numberSlice);
console.log(number);

// array splice, splice means remove element permanently in array...
const age = [23, 24, 26, 35, 25, 34, 28, 30];
console.log('befor array', age)
const ageSplice = age.splice(1, 4);
console.log('splice array', ageSplice);
console.log('after array', age);


// array splice, splice means remove element permanently in array...
const age2 = [23, 24, 26, 35, 25, 34, 28, 30];
console.log('befor array', age2)
const ageSplice2 = age2.splice(1, 4, 100, 111, 112, 113);
console.log('splice array', ageSplice2);
console.log('after array', age2);


// array splice, splice means remove element permanently in array...
const age3 = [23, 24, 26, 35, 25, 34, 28, 30];
console.log('befor array', age3)
const ageSplice3 = age3.splice(3, 0, 100, 135, 125, 115);
console.log('splice array', ageSplice3);
console.log('after array', age3);

// array splice, splice means remove element permanently in array...
const age4 = [23, 24, 26, 35, 25, 34, 28, 30];
console.log('befor array', age4)
const ageSplice4 = age4.splice(3, 3, 100, 135, 125, 115);
console.log('splice array', ageSplice4);
console.log('after array', age4);