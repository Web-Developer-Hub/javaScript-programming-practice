// solve to mile to kilometer....use Math.floor
function isToKilometer(getMile) {
    const kilometer = 1.60934;
    const result = getMile * kilometer;
    return result;
}
const mile = 12;
const tottalResult = isToKilometer(mile);
console.log(tottalResult);

const myMile = 32;
const myTottalResult = isToKilometer(myMile);
console.log(myTottalResult);

const yourMile = 128;
const yourTottalResult = isToKilometer(yourMile);
console.log(yourTottalResult);

const herMile = 92;
const herTottalResult = isToKilometer(herMile);
console.log(herTottalResult);