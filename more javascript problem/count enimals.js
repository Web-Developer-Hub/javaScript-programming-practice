// write a program which count animals in forrest....
/* 
   1 miles = 10,  first 10 miles = 100
   1 miles = 50,  second 20 miles = 600
   1 miles = 100,  third 30 miles = 1600
   1 miles = 150, infinity miels = depend on input
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
        
    else if (distans <= 30){
        const firstDistansAnimals = 10 * 10;
        const secondDistansAnimals = (20 - 10) * 50;
        const thirdDistansAnimals = (distans - 20) * 100;
        totalThirdDistens = firstDistansAnimals + secondDistansAnimals + thirdDistansAnimals;
        return totalThirdDistens;
    }
        
    else{
        const firstDistansAnimals = 10 * 10;
        const secondDistansAnimals = (20 - 10) * 50;
        const thirdDistansAnimals = (30 - 20) * 100;
        const fourthDistansAnimals = (distans - 30) * 150;
        totalFourthDistens = firstDistansAnimals + secondDistansAnimals + thirdDistansAnimals + fourthDistansAnimals;
        return totalFourthDistens;
    }
}
const miles = 31;
const totalAnimals = animalsCount(miles);
console.log(totalAnimals);