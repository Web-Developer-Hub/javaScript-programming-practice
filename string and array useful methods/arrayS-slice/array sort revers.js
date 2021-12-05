//number sort here..
const number = [3, 4, 1, 2, 5, 9, 7, 6, 8];
const sortNumber = number.sort().reverse();
console.log(sortNumber);

// string sort
const friendName = ['Habib', 'Allen', 'Jack', 'Tarek', 'Maruf'];
const sortName = friendName.sort().reverse();
console.log(sortName);

//sort a big number in array..
const bigNumber = [8, 4, 23, 45, 56, 78, 56, 45, 23, 9, 12, 45, 67];
const sortBigNumber = bigNumber.sort(function (x, y) {
    return x - y;
});
console.log(sortBigNumber);
