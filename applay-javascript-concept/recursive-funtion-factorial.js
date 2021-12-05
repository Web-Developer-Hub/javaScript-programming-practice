// rescursive function use to factorial value fine out..
function factorial(n) {
    if (n ==1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const factorialValue = 5;
const getResult = factorial(factorialValue);
console.log(getResult);