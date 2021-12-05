// function evulation here fisrt.....
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}
const result = add(34, 56);
console.log(result);


// function evulation here two.....
function add(num1, num2) {
    return num1 + num2;
}
const result2 = add(74, 56);
console.log(result2);


// function evulation here third.....
function add2(num1, num2) {
    return num1 + num2;
}
console.log(add2(84, 56));


// function evulation here fourth.....
const myfunk = function add4(num1, num2) {
    return num1 + num2;
};
const result3 = myfunk(51, 76);
console.log(result3);


// function evulation here fifth.....
const myfunk2 = function (num1, num2) {
    return num1 + num2;
};
const result4 = myfunk2(21, 76);
console.log(result4);


// arrow function decler here
const arrowFunck = (num1, num2) => {
    return num1 + num2
}
console.log(arrowFunck(30, 70))

// arrow function decler here
const arrow = (num1, num2) => num1 + num2;
const result5 = arrow(67, 75);
console.log(result5);


// arrow function decler here
const myArrow = (num1, num2) => num1 + num2;
console.log(myArrow(37, 75));

