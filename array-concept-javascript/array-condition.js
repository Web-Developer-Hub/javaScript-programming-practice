// condition apply in array...
var languageName = ["javaScript", "python", "java", "typeScript", "ruby", "PHP", "C", "C++"];
var arrayLangth = languageName.length;
var elementIndexOf = languageName.indexOf("java");
console.log(elementIndexOf);
if (arrayLangth <= 10 &&  elementIndexOf == 2) {
    console.log("all condition are passed!");
}
else {
    console.log("not complate oue condition, please full fill the requirement");
}
console.log(arrayLangth)