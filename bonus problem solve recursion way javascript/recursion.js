// print out 1 to 10
for (let i = 1; i <= 10; i++){
    console.log(i);
}

// print out 1 to 10 revers way..
for (let i = 10; i >= 1; i--){
    console.log(i);
}


// print out 1 to 10 and total sum..
let sum = 0
for (let i = 1; i <= 10; i++){
    sum = sum + i;  // sum += i
}
console.log('total sum', sum)


// print out 1 to 10 revers way..
let totalSum = 0;
for (let i = 10; i >= 1; i--){
    totalSum += i
}
console.log('total sum revers way', totalSum);


// recurtion way to solve...
function sumNumber(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return sumNumber(n - 1) + n;
    }
}
const number = 10;
const totalResult = sumNumber(number);
console.log('result of recursive way', totalResult)


// recurtion way to solve... reverse way
function mySumNumber(n) {
    if (n == 10) {
        return 10;
    }
    else {
        return mySumNumber(n + 1) + n;
    }
}
const myNumber = 1;
const myTotalResult = mySumNumber(myNumber);
console.log('result of recursive revers way', myTotalResult)