// find out random number use function in use for loop.....
function getRandomNumber(number) {
    for (let i = 0; i <= number; i += 1){
        const myRandomNumber = Math.random();
        const getRandomNumber = myRandomNumber * 10;
        const roundedRandom = Math.round(getRandomNumber);
        return roundedRandom;
    }    
}
const looping = 10;
const getResult = getRandomNumber(looping);
console.log(getResult);


// find out random number use function in use while loop.....
function myRandomNumber(number) {
    let i = 1;
    while (i <= number) {
        const myRandomNumber = Math.random();
        const getRandomNumber = myRandomNumber * 10;
        const roundedRandom = Math.round(getRandomNumber);
        return roundedRandom;
    }
}
const myLooping = 10;
const myResult = myRandomNumber(myLooping);
console.log(myResult);