// write a factorial program revers way..
let facto = 1
for (let i = 6; i >= 1; i -= 1){
    facto *= i; // factorial = factorial * i;
}
console.log(facto);


// write a factorial program
let fact = 1
for (let i = 1; i < 7; i += 1){
    fact *= i // fact = fact * i;
}
console.log(fact);


 // write a factorial program  use recursive funtion...
function factorial(fact) {
    if (fact == 1) {
        return 1;
    }
    else {
        return factorial(fact - 1) * fact;
    }
}
const number = 6;
const totalResult = factorial(number);
console.log('solved to recursive way:', totalResult);


// write a factorial program  use recursive funtion...revers way to solved....
function myFactorial(fact) {
    if (fact == 6) {
        return 6;
    }
    else {
        return myFactorial(fact + 1) * fact;
    }
}
const myNumber = 1;
const myTotalResult = myFactorial(myNumber);
console.log('solved to recursive revers way:', myTotalResult);
