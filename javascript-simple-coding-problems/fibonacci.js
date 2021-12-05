// warit a program that give a fibonacci serise..using for loop
const fibo = [0, 1];
for (let i = 2; i <= 6; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}
console.log(fibo);

// warit a program that give a fibonacci serise..using while loop
const fibonacci = [0, 1];
let i = 2;
while (i <= 10) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    i += 1;
}
console.log(fibonacci);