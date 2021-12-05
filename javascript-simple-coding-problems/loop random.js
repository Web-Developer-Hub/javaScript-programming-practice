// find out random number use for loop 
for (let i = 0; i <= 10; i += 1){
    const myRandomNumber = Math.random();
    const getRandomNumber = myRandomNumber * 10;
    const roundedRandom = Math.round(getRandomNumber);
    console.log(roundedRandom);
}

console.log("Program terminate");

// find out random number use while loop 
let i = 0;
while (i <= 30) {
    const randomNumber = Math.random()
    const getRandom = randomNumber * 15;
    const roundRandom = Math.round(getRandom);
    console.log(roundRandom);
    i += 1;
}

