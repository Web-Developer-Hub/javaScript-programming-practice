// fast way to default value set
function add(num1, num2) {
  if (num2 === undefined) {
    num2 = 0;
  }
  const sum = num1 + num2; 
  return sum;
}

const result = add(23);
console.log(result);


// second way to default value set
function summation(number1, number2) {
  number2 = number2 || 0;
  const total = number1 + number2;
  return total;
}
const myTotal = summation(34);
console.log(myTotal);


// third way to default vakue set
function addNumber(x, y = 0) {
  const sum = x + y;
  return sum;
}
const myResult = addNumber(97);
console.log(myResult); 



