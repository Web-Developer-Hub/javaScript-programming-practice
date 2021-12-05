// write a program which count animals in forrest....
/* 
   1 miles = 10,  first 10 miles = 100
   1 miles = 50,  second 20 miles = 600
   1 miles = 100,  third 30 miles = 1600
*/
function animalsCount(distans) {
    if (distans <= 10) {
        const firstDistansAnimals = distans * 10;
        return firstDistansAnimals;
    }

    else if (distans <= 20) {
        const firstDistansAnimals = 10 * 10;
        const secondDistansAnimals = (distans - 10) * 50;
        totalSecondDistens = firstDistansAnimals + secondDistansAnimals;
        return totalSecondDistens;
    }
        
    else{
        const firstDistansAnimals = 10 * 10;
        const secondDistansAnimals = (20 - 10) * 50;
        const thirdDistansAnimals = (distans - 20) * 100;
        totalThirdDistens = firstDistansAnimals + secondDistansAnimals + thirdDistansAnimals;
        return totalThirdDistens;
    }
}
const miles = 31;
const totalAnimals = animalsCount(miles);
console.log(totalAnimals);