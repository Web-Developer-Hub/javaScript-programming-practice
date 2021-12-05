//get array total sum use function and in use for loop....
function sumArray(examMarks) {
    let arrayTotalSum = 0;
    for (let i = 0; i < examMarks.length; i++){
        const element = examMarks[i];
        arrayTotalSum += element; // arrayTotalSum + arrayTotalSum + element;
    }
    return arrayTotalSum;
}

const examMarks = [89, 98, 76, 65, 45, 94, 84, 72, 75, 86, 56, 51, 100];
const result = sumArray(examMarks);
console.log(result);


// get array total sum use function and in use while loop....
function getSum(marks) {
    let i = 0;
    let sum = 0;
    while (i < marks.length) {
        const element = marks[i];
        sum += element // sum = sum + element;
        i += 1;
    }
    return sum;
}
const marks = [89, 98, 76, 65, 45, 94, 84, 72, 75, 86, 56, 51, 34, 12, 34, 25];
const totalResult = getSum(marks);
console.log(totalResult);