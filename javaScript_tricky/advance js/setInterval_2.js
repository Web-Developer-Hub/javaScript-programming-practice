//use setInterval in program...
console.log('hello programmer');
console.log('hello developer');

// use internal funtion in setInterval.
let x = 0
const count = () => {
    x++;
    console.log(x)
    if (x > 5) {
        clearInterval(value)
    }
}
const value = setInterval(count, 1000, x)


// use inside funtion in setInterval function
let i = 0
const timeID = setInterval(() => {
    i++
    console.log(i);
    if (i > 15) {
        clearInterval(timeID);
    }
}, 1000)