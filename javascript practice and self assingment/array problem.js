// find out even number in array and push a new array even number..using for loop
function problemSolve(array) {
    const positiveNumber = []
    for (let i = 0; array.length; i++){
        const element = array[i];
        if (element % 2 == 0) {
            positiveNumber.push(element);
        }
        else {
            break;
        }
    }
    return positiveNumber;
}
const myArray = [34, 56, 78, 45, 89, 48, 90, 67, 88];
const myResult = problemSolve(myArray);
console.log(myResult);
