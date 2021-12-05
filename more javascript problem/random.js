// find out random number use function in use for loop.....and find out unic item...
function getRandomNumber(number) {
    const unicItem = [];
    const array = [];
    for (let i = 1; i <= number; i += 1){
        const myRandomNumber = Math.random();
        const getRandomNumber = myRandomNumber * 10;
        const roundedRandom = Math.round(getRandomNumber);
        array.push(roundedRandom);

        if (unicItem.indexOf(roundedRandom)  == -1 ) {
            unicItem.push(roundedRandom);
        }
    }
    console.log("Unic item select here");
    console.log(unicItem, "\n");
    return array;
}
const looping = 10;
const getResult = getRandomNumber(looping);
console.log("This my random array");
console.log(getResult);



// find out random number use function in use while loop.....and find out unic array..
function myRandomNumber(number) {
    const unicItem = [];
    const array = [];
    let i = 1;
    while (i <= number) {
        const myRandomNumber = Math.random();
        const getRandomNumber = myRandomNumber * 10;
        const roundedRandom = Math.round(getRandomNumber);
        array.push(roundedRandom);
        i += 1;

        if (unicItem.indexOf(roundedRandom)  == -1 ) {
            unicItem.push(roundedRandom);
        }
    }
    console.log("Unic item select here");
    console.log(unicItem, "\n");
    return array;
}
const myLooping = 15;
const myResult = myRandomNumber(myLooping);
console.log("This my random array");
console.log(myResult);