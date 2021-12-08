// // find out largest element in array.. ues function and in use for loop
// function largElement(numbers) {
//     let maxValue = numbers[0]
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i]
//         if (element > maxValue) {
//             maxValue = element;
//         }
//         else {
//             maxValue = maxValue;
//         }
//     }
//     return maxValue;
// }
// const myArray = [23, 45, 67, 178, 45, 76, 89, 78, 99, 100];
// const result = largElement(myArray);
// console.log(result);


// find out largest element in array.. ues function and in use while loop
function myFunck(price) {
    let i = 0;
    let maxVAlue = price[0];
    while (i < price.length) {
        const element = price[i];
        if (element > maxVAlue) {
            maxVAlue = element;
        }
        else {
            maxVAlue = maxVAlue;
        }
        i += 1;
    }
    return maxVAlue;
}
const price = [45, 78, 90, 87, 66, 90, 34, 12, 99, 34, 67, 89, 112];
const myResult = myFunck(price);
console.log(myResult);

