//get array total sum use for loop....
const examMarks = [89, 98, 76, 65, 45, 94, 84, 72, 75, 86, 56, 51];
let arrayTotalSum = 0;
for (let i = 0; i < examMarks.length; i++){
    const element = examMarks[i];
    arrayTotalSum += element; // arrayTotalSum + arrayTotalSum + element;
}
console.log(arrayTotalSum);


// get array total sum use while loop....
let i = 0;
let sum = 0;
const marks = [89, 98, 76, 65, 45, 94, 84, 72, 75, 86, 56, 51, 34, 12, 34, 23];
while (i < marks.length) {
    const element = marks[i];
    sum += element // sum = sum + element;
    i += 1;
}
console.log(sum);
