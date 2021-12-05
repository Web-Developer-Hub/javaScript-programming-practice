// use for loop in setInterval function..
const myFunc = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const id = setInterval(() => {
            console.log(element)
            if (element > arr.length) {
                clearInterval(id)
            }
        }, 1000)
    }
}
const arr = [44, 54, 67, 89, 90, 93, 41, 77, 43]
myFunc(arr)