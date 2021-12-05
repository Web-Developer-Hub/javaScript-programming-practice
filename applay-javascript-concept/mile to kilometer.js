// solve to mile to kilometer....use Math.floor
function isToKilometer(getMile) {
    const kilometer = 1.60934;
    const result = getMile * kilometer;
    const getResult = Math.floor(result);
    return getResult;
}
const mile = 12;
const tottalResult = isToKilometer(mile);
console.log(tottalResult);

const myMile = 23;
const myTotalResult = isToKilometer(myMile);
console.log(myTotalResult);

const yourMile = 111;
const yourTotalResult = isToKilometer(yourMile);
console.log(yourTotalResult);

const herMile = 55;
const herTotalResult = isToKilometer(herMile);
console.log(herTotalResult);


