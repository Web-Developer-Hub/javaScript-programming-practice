// warit a program that give a fibonacci serise..using function use in for loop
function fibonacciSerise(fibonacci) {
    const fibo = [0, 1];
    for (let i = 2; i <= fibonacci; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}
const fibinacciValue = 10;
const myResult = fibonacciSerise(fibinacciValue)
console.log(myResult);



// warit a program that give a fibonacci serise..using function and use in while loop
function myFunk(fibo) {
    const fibonacci = [0, 1];
    let i = 2;
    while (i <= fibo) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        i += 1;
    }
    return fibonacci;
}
const number = 12;
const getFibonacci = myFunk(number)
console.log(getFibonacci);