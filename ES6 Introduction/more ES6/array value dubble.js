// array element looping and get element do multiplide by 2
function dubleIt(params) {
    return params * 2
}
const number = [23, 43, 56, 26, 76, 89];
const output = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    output.push(dubleIt(element));
}
console.log(output);


// arry element looping and get element do multiplode by 2 use arrow funtion
const dubleIt2 = (params) => params * 2

const number2 = [23, 43, 56, 26, 76, 89];
const output2 = [];
for (let i = 0; i < number2.length; i++) {
    const element = number2[i];
    output2.push(dubleIt2(element));
}
console.log(output2);


// array element looping and get element do multiplide by 2 uae normal funtion
function dubleIt3(params) {
    return params * 2
}
const number3 = [23, 43, 56, 26, 76, 89];
const output3 = [];
for (const element of number3) {
    output3.push(dubleIt3(element));
}
console.log(output3);


// array element looping and get element do multiplide by 2 use arrow function
const dubleIt4 = (params) => params * 2;

const number4 = [23, 43, 56, 26, 76, 89];
const output4 = [];
for (const element of number4) {
    output4.push(dubleIt4(element));
}
console.log(output4);
