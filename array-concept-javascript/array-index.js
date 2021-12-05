// array index detect and update and delete elements in array.

// element Indexof find out an array.
var languageName = ["javaScript", "python", "java", "typeScript", "ruby", "PHP", "C", "C++"]
var languageNameIndex = languageName.indexOf("javaScript");
console.log(languageNameIndex);
console.log(languageName.indexOf("typeScript")); //short cut way.
console.log(languageName.indexOf("CSharp")) //answer -1, beacuse "CSharp" is not present in array. 
console.log(languageName.length)//full length


// element Indexof find out an array.
var numbers = [45, 75, 76, 65, 34, 73, 25, 76, 87, 98]
var indexNumber = numbers.indexOf(87); //find out of 87 index. answer: 8
console.log(indexNumber);
console.log(numbers.indexOf(76)) //short cut way.
console.log(numbers.indexOf(100)) //answer -1, beacuse 100 is not present in array. 
console.log(numbers.length) //full lenght


// find out element by index an array.
var ageFriend = [45, 75, 76, 65, 34, 73, 25, 76, 87, 98];
var age = ageFriend[3];
console.log(age);
console.log(ageFriend[5]); //shortcut way.