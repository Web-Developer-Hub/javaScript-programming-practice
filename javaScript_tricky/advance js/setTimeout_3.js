// array on use setTimeout..
const myWork = (arr) => {
    const myFunk = (arr) => {
        for (let i = 0; i < arr.length; i++){
            setTimeout(() => {
               console.log(arr[i])
           }, 1000)
        }
    }
    setTimeout(myFunk, 1000, arr)
}
const arr = [34, 56, 78, 89, 63, 67, 98, 97, 76];
myWork(arr);
