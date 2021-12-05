// write a program which as input centimeater and return meter
function centimeterToMeter(centimeter) {
    const convert = centimeter * 0.01;
    return convert;
}
const centimeater = 100;
const getMeter = centimeterToMeter(centimeater);
console.log(getMeter);
