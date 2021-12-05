// find max value between of tow numbers
const minister = 650;
const businessMan = 570;
if (minister > businessMan) {
    console.log("minister is rich man")
}
else {
    console.log("business man is rich man");
}


//find max value between of three numbers
const googl = 770;
const apple = 690;
const microsoft = 680;
if (googl > apple && googl > microsoft) {
    console.log("Googl is rich company");
}
else if (apple > googl && apple > microsoft) {
    console.log("Apple is rich company")
}
else {
    console.log("Micorsoft is rich company")
}

//find max value between of three numbers another way...
const max = Math.max(googl, apple, microsoft);
console.log(max, "is largest")