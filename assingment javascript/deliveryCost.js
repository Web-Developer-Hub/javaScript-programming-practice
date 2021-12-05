// delevery cost find out..
function deliveryCost(tshirt) {
    if (tshirt <= 100) {
        const frsit100 = tshirt * 100;
        return frsit100;
    }
    else if (tshirt <= 200) {
        const frsit100 = 100 * 100;
        const tshirtSecond = tshirt - 100;
        const second200 = (tshirtSecond * 80) + frsit100;
        return second200;
    }
    else {
        const frsit100 = 100 * 100;
        const frsit200 = 100 * 80;
        const tshirtThirs = tshirt - 200;
        const second200 = (tshirtThirs * 50) + frsit100 + frsit200;
        return second200;
    }
}
const numberOfTshirt = 215;
const totalCost = deliveryCost(numberOfTshirt);
console.log(totalCost);