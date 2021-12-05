// array elemend index find out by indexOF and this index value replase in array....
var languageName = ["JavaScript", "Python", "TypeScript", "C", "C++", "PHP", "Ruby", "CSharp", "Golang"];
var rubyIndex = languageName.indexOf("PHP");
var newLanguageName = languageName[rubyIndex] = "pacale"
console.log(rubyIndex);
console.log(newLanguageName)
console.log(languageName)