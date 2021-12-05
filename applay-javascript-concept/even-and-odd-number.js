// simple find out even number
const number = 50;
const remainder = number % 2;
const result = remainder == 0;
console.log(result);

// simple find out odd number
const num = 51;
const numRemainder = num % 2;
const resultNum = numRemainder != 0;
console.log(resultNum);

// find out even number using function...
function isEven(even) {
    const reminder = even % 2;
    if (reminder == 0) {
        return true;
    }
    else {
        return false;
    }
}
const evenNumber = 20;
const getEvenNumber = isEven(evenNumber);
console.log(getEvenNumber);


// find out odd number using function...
function isOdd(odd) {
    const reminder = odd % 2;
    if (reminder != 0) {
        return true;
    }
    else {
        return false;
    }
}
const oddNumber = 22;
const getOddNumber = isOdd(oddNumber);
console.log(getOddNumber);