// array push pop and indexOf use this program
let programmer = ["Habib", "Sobuj", "Badhon", "Tarek", "Nil", "Marf", "Jack"];

let arrayIndexOf = programmer.indexOf("Badhon");  //find out array Badhon element index...
console.log(arrayIndexOf);

let arrayPush = programmer.push("Mr:Janathon"); // push add a new element in array last position..
console.log(arrayPush); //push return array length

let arrayPop = programmer.pop(); // pop a element delete in array last prosition..
console.log(arrayPop);

console.log(programmer); // simple array console log..

let replace = programmer[1] = "Alin"; // replace an element in array of 1 index position value....
console.log(programmer);
console.log(replace); //console log replace value...

let arrayShift = programmer.shift(); // delete an element in array of first index value...
console.log(arrayShift);

let arrayUnShift = programmer.unshift("Mr: Habib"); //unShift add a new element in array first position..
console.log(arrayUnShift); // unShift retun array length...
console.log(programmer);
