//find out even number...
const number = 144;
function isEvenNumber(even) {
    if (even % 2 == 0) {
        return true;
    }
    return false;
}
const getEvenNumber = isEvenNumber(number);
console.log(number, "This is even number", getEvenNumber);


//find out even number...
const num = 145;
function isOddNumber(odd) {
    if (odd % 2 != 0) {
        return true;
    }
    return false;
}
const getEvenNum = isOddNumber(num);
console.log(num, "This is odd number", getEvenNum);