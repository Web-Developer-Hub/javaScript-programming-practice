// recursive way to solve fonacci element...
function fibonacci(n) {
    if (n == 0) {
        return 0
    }
    else if (n == 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
const valu = 6;
const getResult = fibonacci(valu);
console.log(getResult);



// recursive way to solve fonacci series...
function myFibonacci(n) {
    if (n == 0) {
        return [0]
    }
    else if (n == 1) {
        return [0, 1];
    }
    const fibo = myFibonacci(n - 1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}
const myValu = 6;
const myGetResult = myFibonacci(myValu);
console.log(myGetResult);