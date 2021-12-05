// find out random number use function in use for loop.....
function getRandomNumber(number) {
    const array = []
    for (let i = 1; i <= number; i += 1){
        const myRandomNumber = Math.random();
        const getRandomNumber = myRandomNumber * 10;
        const roundedRandom = Math.round(getRandomNumber);
        array.push(roundedRandom);
    }
    return array;
}
const looping = 10;
const getResult = getRandomNumber(looping);
console.log(getResult);


// find out random number use function in use while loop.....
function myRandomNumber(number) {
    const array = []
    let i = 1;
    while (i <= number) {
        const myRandomNumber = Math.random();
        const getRandomNumber = myRandomNumber * 10;
        const roundedRandom = Math.round(getRandomNumber);
        array.push(roundedRandom);
        i += 1;
    }
    return array;
}
const myLooping = 15;
const myResult = myRandomNumber(myLooping);
console.log(myResult);