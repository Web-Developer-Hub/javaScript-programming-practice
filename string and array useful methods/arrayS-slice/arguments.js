// arguments add 
function addNumber() {
    const arr = [...arguments]
    let result = 0;
    for (const element of arr){
        result += element;
    }
    return result;
}
const getResult = addNumber(34, 45, 54, 65, 78);
console.log(getResult);

