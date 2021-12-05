// muntiple condition
console.log(23 < 30 && 40 != 20); //true
console.log(23 < 30 || 40 != 40); // false
console.log(23 < 30 && 40 != 20 && 5 == 5 && 5 > 2 || false); //true
console.log(23 < 30 && 40 != 40 && 5 == 5 && 5 > 2 || false); // false


// muntiple condition use to variable....
var selarey = 35000;
var flat = true;
var height = 5.7;
var honest = true;
var higherEducation = true;

if (selarey <= 40000 && flat == true && height <= 5.8 && honest == true && higherEducation == true){
    console.log("YEY! you can marry me.");
}
else if(selarey <= 30000 && flat == false && height <= 5.6 && higherEducation == true || honest == true){
    console.log("I will marry you")
}
else if(selarey <= 50000 && flat == true && height <= 5.8 && higherEducation == true || honest == false){
    console.log("no nenever! I will never marry you because you not honest")
}

else {
    console.log("i will knok yoy!")
}