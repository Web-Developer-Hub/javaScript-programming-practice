// sum all element of an array useing arrow function
const addNumbers = (arr) => {
    let result = 0;
    for (const element of arr) {
        result += element;
    }
    return result;
}

const result = addNumbers([34, 56, 67, 45, 34, 32]);
console.log(result);