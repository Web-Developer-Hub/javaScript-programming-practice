//retur to return a funtion
const stopWatch = () => {
    let counter = 0
    return () =>{
        counter++
        return counter;
    }
}
const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());