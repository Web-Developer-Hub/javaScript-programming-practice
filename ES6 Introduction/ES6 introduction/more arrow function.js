// single parametars pass function
const single1 = num => num + 20;
console.log(single1(100));

// single parametars pass function second way..
const single2 = num => num * 2;
console.log(single2(50));

// single parametars pass function
const single3 = (num) => num + 20;
console.log(single3(100));

// single parametars pass function second way..
const single4 = (num) => num * 2;
console.log(single4(50));

//text show use a arrow function..
const massage1 = text => 'Hello programmer';
console.log(massage1())

//text show use a arrow function..
const massage2 = text => text;
console.log(massage2('Hello genius programmer!'))

//text show use a arrow function..
const massage3 = (text) => 'Hello programmer';
console.log(massage3())

//text show use a arrow function..
const massage4 = (text) => text;
console.log(massage4('Hello genius programmer!'))

// two numbar add
const add = (num1, num2) => num1 + num2;
const result = add(45, 56);
console.log(result);

// add rwo numbers
const myFunck = (num1, num2) => num1 + num2;
console.log(myFunck(32, 45))

// multiple parameters mummation
const myFunck2 = (num1, num2, num3) => num1 + num2 + num3;
console.log(myFunck2(32, 45, 48))


// some math solve here
const myFunck3 = (num1, num2, num3) => num1 * num2 * num3;
console.log(myFunck3(32, 45, 48))

const doMath = (num1 , num2, num3) => {
    const result = (num1 * num2) + num3;
    return result;
}
console.log(doMath(10, 10, 50))