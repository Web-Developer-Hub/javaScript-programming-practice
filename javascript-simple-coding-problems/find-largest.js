//find largest in two values...use function.......
function maxValue(minister, businessMan) {
    if (minister > businessMan) {
        console.log("minister is rich man")
    }
    else {
        console.log("business man is rich man");
    }
}

const minister = 650;
const businessMan = 570;
maxValue(minister, businessMan);


//find largest in two values...use function.
function findMax(googl, apple, microsoft){
    if (googl > apple && googl > microsoft) {
        console.log("Googl is rich company");
    }
    else if (apple > googl && apple > microsoft) {
        console.log("Apple is rich company")
    }
    else {
        console.log("Micorsoft is rich company")
    }
}
const googl = 770;
const apple = 690;
const microsoft = 680;
findMax(googl, apple, microsoft);


