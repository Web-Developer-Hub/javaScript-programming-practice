// arguments add
function addNumber() {
    let result = 0;
    for (const element of arguments){
        result += element;
    }
    return result;
}
const getResult = addNumber(34, 45, 54);
console.log(getResult);

