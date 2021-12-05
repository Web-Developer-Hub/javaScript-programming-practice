// Determine the factorial value of n
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1)
    }
}
const factorialValue = 6;
const getFactorial = factorial(factorialValue);
console.log(getFactorial);
