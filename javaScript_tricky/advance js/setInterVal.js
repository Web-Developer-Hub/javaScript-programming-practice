//use setInterval in program...
console.log('hello programmer');
console.log('hello developer');

//use internal funtion in setInterval.
let x = 0
const count = () => {
    console.log(x++)
}
setInterval(count, 1000, x)

//use inside funtion in setInterval function

let i = 0
setInterval(() => {
    i++
    console.log(i)
}, 1000)