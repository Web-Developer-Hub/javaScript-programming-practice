// fibonacci series solved.. user for loop.... series return
let fibo = [0, 1]
for (let i = 2; i <= 6; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);


// recursiv way to solved.. series retuen
function recursive(fibo) {
    if (fibo == 0) {
        return [0]
    }
    else if(fibo == 1){
        return [0, 1]
    }
    else {
        const fibonacci = recursive(fibo - 1)
        fibonacci[fibo] = fibonacci[fibo - 1] + fibonacci[fibo - 2];
        return fibonacci;
    }
}
const number = 6;
const result = recursive(number);
console.log(result)


// recursiv way to solved.. nth element find out
function myRecursive(fibo) {
    if (fibo == 0) {
        return 0
    }
    else if(fibo == 1){
        return 1
    }
    else {
        return myRecursive(fibo - 1) + myRecursive(fibo - 2)
    }
}
const myNumber = 6;
const myResult = myRecursive(myNumber);
console.log(myResult)