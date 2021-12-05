// arrow function
const number = () => 89;
console.log(number())

//return a array dubule it
const double = []
const numbers = [43, 21, 45, 53, 56, 76, 43, 42, 78, 89];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    double.push(element * 2)
}
console.log(double);



//another way to return a array dubule it
const numbers2 = [43, 21, 45, 53, 56, 76, 43, 42, 78, 89];
const doublIt = (number) =>  number * 2;

const double2 = []
for (let i = 0; i < numbers2.length; i++) {
    const element = doublIt(numbers2[i]);
    double2.push(element);
}
console.log(double2);