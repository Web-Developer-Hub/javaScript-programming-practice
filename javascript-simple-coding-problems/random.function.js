// find out random number use function in use for loop.....
function getRandomNumber(number) {
    for (let i = 1; i <= number; i += 1){
        const myRandomNumber = Math.random();
        const getRandomNumber = myRandomNumber * 10;
        const roundedRandom = Math.round(getRandomNumber);
        console.log(roundedRandom);
    }    
}
const looping = 10;
getRandomNumber(looping);


// find out random number use function in use while loop.....
function myRandom(number) {
    let i = 1;
    while (i <= number) {
        const myRandomNumber = Math.random();
        const getRandomNumber = myRandomNumber * 10;
        const roundedRandom = Math.round(getRandomNumber);
        console.log(roundedRandom)
        i += 1;
    }
}
const myLoopCount = 6;
myRandom(myLoopCount);
