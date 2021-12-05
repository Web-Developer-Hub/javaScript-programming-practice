//moon rise funtion here...
function isMoonUp(getTime) {
    if (getTime >= 19 && getTime <= 5) {
        return true;
    }
    else {
        return false;
    }
}
let time = new Date();
time = time.getHours();
const isResult = isMoonUp(time)
console.log(isResult);