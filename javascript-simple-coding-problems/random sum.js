// find out random number use function in use for loop.....and sum
function getRandomNumber(number) {
    const array = []
    let sum = 0;
    for (let i = 1; i <= number; i += 1){
        const myRandomNumber = Math.random();
        const getRandomNumber = myRandomNumber * 10;
        const roundedRandom = Math.round(getRandomNumber);
        array.push(roundedRandom);
    }
     // array all elemtm sum here..
     for (let i = 0; i < array.length; i += 1){ 
        const element = array[i];
        sum = sum + element;
    }
    console.log(sum);
    return array;
}
const looping = 10;
const getResult = getRandomNumber(looping);
console.log(getResult);


// find out random number use function in use while loop.....and array total sum
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
    let x = 0;
    let totalSum = 0;
    while (x < array.length) {
        const element = array[x];
        totalSum += element; //totalSum = totalSum + element;
        x += 1;
    }
    console.log(totalSum)
    
    return array;
}
const myLooping = 15;
const myResult = myRandomNumber(myLooping);
console.log(myResult);