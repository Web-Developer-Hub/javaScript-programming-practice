//multiple paameters handlers here
const myFunc = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++){
        const element = args[i];
        total += element;
    }
    return total;
}
console.log(myFunc(34, 56, 34, 23))