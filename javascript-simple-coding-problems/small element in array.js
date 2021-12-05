// find out largest element in array.. ues function and in use for loop
function largElement(numbers) {
    let smallValue = numbers[0]
    for (let i = 0; i < numbers.length; i++){
        const element = numbers[i]
        if (element < smallValue) {
            smallValue = element;
        }
        else {
            smallValue = smallValue;
        }
    }
    return smallValue;
}
const myArray = [23, 45, 67, 178, 45, 76, 11, 89, 78, 99, 100];
const result = largElement(myArray);
console.log(result);


// find out largest element in array.. ues function and in use while loop
function myFunck(price) {
    let i = 0;
    smallValue = price[0];
    while (i < price.length) {
        element = price[i];
        if (element < smallValue) {
            smallValue = element;
        }
        else {
            smallValue = smallValue;
        }
        i += 1;
    }
    return smallValue;
}
const price = [45, 78, 90, 87, 66, 90, 34, 12, 99, 34, 67, 89, 112];
const myResult = myFunck(price);
console.log(myResult);

