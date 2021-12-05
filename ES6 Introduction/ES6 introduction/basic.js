// this is my funtion
function arraySum(params) {
  let total = 0;
  for (let i = 0; i < params.length; i++) {
    const element = params[i];
    total += element;
  }
  return total;
}
const age = [23, 45, 67, 78, 78, 65, 34];
const myResult = arraySum(age);
console.log(myResult);
