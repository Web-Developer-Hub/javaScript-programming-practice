// factorial value revers useing function and while loop..
function reversFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i -= 1;
    }
    return factorial;
}
const factorialValue = 5;
const factorialResult = reversFactorial(factorialValue);
console.log(factorialResult);


// factorial value revers useing function and for loop..
function myReversFactorial(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}
const myFactorialValue = 6;
const myFactorialResult = myReversFactorial(myFactorialValue);
console.log(myFactorialResult);