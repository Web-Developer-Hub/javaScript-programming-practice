// element shift an array.
var languageName = ["javaScript", "python", "java", "typeScript", "ruby", "PHP", "C", "C++"]
var replace = languageName.shift();
console.log(replace); //shift remove first element...
console.log(languageName);


// element shift an array.
var numbers = [45, 54, 34, 76, 87, 65, 23, 98, 85, 84, 97];
var replaceNumber = numbers.shift();
console.log(replaceNumber); //shift remove first element...
console.log(numbers);


// element unshift an array.
var languageName = ["javaScript", "python", "java", "typeScript", "ruby", "PHP", "C", "C++"]
var replace = languageName.unshift("ES6");
console.log(replace); //unshift return array length, answer = 9
console.log(languageName);


// element unshift an array.
var numbers = [45, 54, 34, 76, 87, 65, 23, 98, 85, 84, 97];
var replaceNumber = numbers.unshift(100);
console.log(replaceNumber); //unshift return array length, answer = 12
console.log(numbers);