// defualt parameter set in funtion...
const getSum = (x, y, z = 7) => {
    return (x + y + z);
}
const result = getSum(10, 12, 20);
console.log(result);