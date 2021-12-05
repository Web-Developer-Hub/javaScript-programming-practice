//find out any number of factorial value...use for loop
function getFactorial(factorialNumber) {
    let factorial = 1
    for (let i = 1; i <= factorialNumber; i++){
        factorial = factorial * i;
    }
    return factorial;
}
const factorialValue = 7;
const factorialResult = getFactorial(factorialValue);
console.log(`${factorialValue} value of factorial is: ${factorialResult}`);


//find out any number of factorial value...use while loop..
function myFactorial(factorialNumber) {
    let factorial = 1
    let i = 1;
    while (i <= factorialNumber) {
        factorial = factorial * i;
        i += 1;
    }
    return factorial;
}
const value = 6;
const result = myFactorial(value);
console.log(`${value} value of factorial is: ${result}`);