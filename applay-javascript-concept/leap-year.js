// chake to leap year..
function chakeLeapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return true;
    }
    else if (year % 400 == 0) {
        return true
    }
    else {
        return false;
    }
}
const inputYear = 2100;
const getLeapYear = chakeLeapYear(inputYear);
console.log(getLeapYear);