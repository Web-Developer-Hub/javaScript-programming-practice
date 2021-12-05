//একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log. using for loop.
const number = [23, 56, 89, 81, 78, 45, 90, 100, 80, 27, 88, 20]
const num = 80;
const newArray = [];
for (let i = 0; i < number.length; i++){
    const element = number[i];
    if (element > num) {
        newArray.push(element);
    }
}
console.log(newArray);

//একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log. useing for of loop
const numbers = [23, 56, 89, 81, 78, 45, 90, 100, 80, 27, 88, 20]
const nums = 80;
const myArray = [];
for (const element of numbers){
    if (element > nums) {
        myArray.push(element);
    }
}
console.log(myArray);

//একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log. useing while loop
const number1 = [23, 56, 89, 81, 78, 45, 90, 100, 80, 27, 88, 20]
const num1 = 80;
const herArray = []
let i = 0;
while (i < number1.length) {
    const element = number1[i];
    if (element > num1) {
        herArray.push(element);
    }
    i += 1;
}
console.log(herArray);