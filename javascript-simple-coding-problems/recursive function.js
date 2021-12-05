// resursivive way to call a function and find out factorial numbers
function factorial(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * factorial((n - 1));
    }
}
const n = 5;
const result = factorial(n);
console.log(result);

/*
return 2 * 1 = factorial((n - 1)); factorial =1
return 3 * 2 = factorial((n - 1)); factorial = 2
return 4 * 6 = factorial((n - 1)); factorial = 3
return 5 * 24 = factorial((n - 1)); factorial = 4
factorial(n) n = 5;
*/