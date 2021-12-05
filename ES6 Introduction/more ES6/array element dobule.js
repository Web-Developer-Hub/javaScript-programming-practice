// array element looping and get element do multiplide by 2
const number = [23, 43, 56, 26, 76, 89];
const output = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    output.push(element * 2);
}
console.log(output);


// array element looping and get element do multiplide by 2 shortcut way
const number2 = [23, 43, 56, 26, 76, 89];
const output2 = [];
for (const element of number2){
    output2.push(element * 2)
}
console.log(output2);