// find out even number in array and push a new array even number..using for of loop
function problemSolve(array) {
    const positiveNumber = []
    for (const element of array){
        if (element % 2 == 0) {
            positiveNumber.push(element);
        }
        else {
            break;
        }
    }
    return positiveNumber;
}
const myArray = [34, 56, 78, 60, 45, 89, 48, 90, 67, 88];
const myResult = problemSolve(myArray);
console.log(myResult);
