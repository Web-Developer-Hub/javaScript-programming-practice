//clouser in javascript...
const bank = (owner) => {
    const name = owner
    let blance = 0;
    return {
        deposit: (amount) => {
            blance += amount;
            return `${name} blance is: ${blance}`
        },
        withdraw: (amount) => {
            blance -= amount;
            return `${name} blance is: ${blance}`
        }
    }
}
const calculate = bank('Habib');
const result = calculate.deposit(177);
const result2 = calculate.withdraw(100);
const result3 = calculate.deposit(373);
console.log(result);
console.log(result2);
console.log(result3);