// write a program which as input seer and return to mon.
function seerToMon(getSeer) {
    const type = typeof (getSeer);
    if (type != 'number' || getSeer <= 0) {
        console.log('please enter a integer number');
    }
    else {
        const convert = getSeer / 40;
        return convert;
    }
}
const seer = 120;
const mon = seerToMon(seer);
console.log(mon);