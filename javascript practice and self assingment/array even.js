// find out even number in array and push a new array even number..using while loop
function problemSolve(array) {
    const positiveNumber = []
    let i = 0;
    while (i < array.length) {
        const element = array[i];
        if (element % 2 == 0) {
            positiveNumber.push(element);
        }
        else {
            break;
        }
        i += 1;
    }
    return positiveNumber;
}
const myArray = [34, 56, 78, 60, 20, 45, 89, 48, 90, 67, 88];
const myResult = problemSolve(myArray);
console.log(myResult);
