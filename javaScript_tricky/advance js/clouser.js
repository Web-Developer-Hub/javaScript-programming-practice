//clouser in javascript...
const bank = (owner) => {
    const name = owner
    let blance = 0;
    return (amount) => {
        blance += amount;
        return `${name} blance is: ${blance}`
    }
}
const calculate = bank('Habib');
const result = calculate(100);
const result2 = calculate(100);
const result3 = calculate(373);
console.log(result);
console.log(result2);
console.log(result3);