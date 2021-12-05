// findout odd number in array
const arr = [12, 34, 45, 67, 78, 89, 98, 65, 43, 23]
const reult = arr.filter((params) => params % 2 === 0);
console.log(reult);

// more sortcut way to solve this problem
console.log([12, 34, 45, 67, 78, 89, 98, 65, 43, 23].filter((params) => params % 2 === 0))


// findout even number in array
const arr2 = [12, 34, 45, 67, 78, 89, 98, 65, 43, 23]
const reult2 = arr2.filter((params) => params % 2 !== 0);
console.log(reult2);

// more sortcut way to solve this problem
console.log([12, 34, 45, 67, 78, 89, 98, 65, 43, 23].filter((params)=> params %2 !== 0 ))