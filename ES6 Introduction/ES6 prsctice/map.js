// simple math
const arr = [12, 34, 45, 67, 78, 89, 98, 65, 43, 23]
const result = arr.map((params) => params * 5);
console.log(result);

// simple math
const arr2 = [12, 34, 45, 67, 78, 89, 98, 65, 43, 23]
const result2 = arr2.map((params) => params - 5);
console.log(result2);

// simple math
const arr3 = [12, 34, 45, 67, 78, 89, 98, 65, 43, 23]
const result3 = arr3.map((params) => params - 5);
console.log(result3);

// simple math
const arr4 = [12, 34, 45, 67, 78, 89, 98, 65, 43, 23]
const result4 = arr4.map((params) => params / 5);
console.log(result4);

// simple math
const arr5 = [12, 34, 45, 67, 78, 89, 98, 65, 43, 23]
const result5 = arr5.map((params) => params % 5);
console.log(result5);

//more shortcut way to solve
console.log([12, 34, 45, 67, 78, 89, 98, 65, 43, 23].map((params) => params * 5));
console.log([12, 34, 45, 67, 78, 89, 98, 65, 43, 23].map((params) => params - 5));
console.log([12, 34, 45, 67, 78, 89, 98, 65, 43, 23].map((params) => params + 5));
console.log([12, 34, 45, 67, 78, 89, 98, 65, 43, 23].map((params) => params / 5));
console.log([12, 34, 45, 67, 78, 89, 98, 65, 43, 23].map((params) => params % 5));