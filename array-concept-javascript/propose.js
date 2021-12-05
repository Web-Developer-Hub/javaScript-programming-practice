//if i can this condition full fill then a girl fall in my love...
// girl conditions.. 
var honestPerson = true;  //mendatory
var goodStudent = true;
var CSE_Complete = true;
var goodProgrammer = true;
var sellery = 50000;
var height = 5.8;
var caring = true; // mendatory
var goodCharecter = true; //mendatory

// my position
var meHonest = true
var my_sellary = 20000;
var myCharecter = true;
var myCaring = true
var meGoodeProgrammer = true;
var myCSE_complete = false;
var myHeight = 5.6;


if (honestPerson == meHonest && goodCharecter == myCharecter && caring == myCaring && sellery >= my_sellary) {
    console.log("Yes!, i agree to your propose")
}
else if (goodProgrammer == meGoodeProgrammer && CSE_Complete == myCSE_complete || honestPerson == meHonest) {
    console.log(" i little bit agree to your propose");
}
else if (sellery >= my_sellary && height >= myHeight && honestPerson == false && goodCharecter == false) {
    console.log("No never, beacuse yor are bitch person. it no accepable.")
}
else {
    console.log("please you are condition full fill and then propse me!")
}
console.log("Program Terminatted");