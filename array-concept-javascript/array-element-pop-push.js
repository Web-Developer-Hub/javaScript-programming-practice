// element pop an array.
var languageName = ["javaScript", "python", "java", "typeScript", "ruby", "PHP", "C", "C++"]
var replace = languageName.pop();
console.log(replace);
console.log(languageName);


// element pop an array.
var numbers = [45, 54, 34, 76, 87, 65, 23, 98, 85, 84, 97];
var replaceNumber = numbers.pop();
console.log(replaceNumber);
console.log(numbers);


// element push an array.
var languageName = ["javaScript", "python", "java", "typeScript", "ruby", "PHP", "C", "C++"]
var replace = languageName.push("golang");
console.log(replace); //push return array length, answer = 9
console.log(languageName);


// element push an array.
var numbers = [45, 54, 34, 76, 87, 65, 23, 98, 85, 84, 97];
var replaceNumber = numbers.push(95);
console.log(replaceNumber); //push return array length, answer = 12
console.log(numbers);
