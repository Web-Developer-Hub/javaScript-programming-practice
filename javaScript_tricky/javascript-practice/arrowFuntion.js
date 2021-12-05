// 1 parameter arrow funtion...
const devided = (number) => number / 7;
console.log(devided(89));

// 2 parameter arrow function...
const math = (num1, num2) => (num1 + num2) / 2;
console.log(math(23, 27))

// 3 parameter arrow function
const calculate = (num1, num2, num3) => (num1 + num2 - num3) * 2;
console.log(calculate(22, 12, 10))

// multi line arrow funtion
const calculator = (num1, num2) => {
    const result = (num1 + 7) + (num2 + 7);
    return result;
}
console.log(calculator(23, 45))


// multi line arrow funtion
const calculator2 = (num1, num2, num3) => {
    const result = (num1 + 7) + (num2 + 7) + (num3 + 7);
    return result;
}
console.log(calculator2(23, 45, 10))