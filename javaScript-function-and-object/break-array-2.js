//break use in array and while loop..
let studentName = [65, 78, 98, 23, 45, 67, 87, 89, 99, 33, 22, 50];
let arrayLength = studentName.length;
let x = 0;
while (x < arrayLength) {
    let element = studentName[x];
    console.log(element)
    if (x > 3) {
        console.log("program terminate! \n");
        break;
    }
    x += 1;
}


//break use in array and for loop..
let coligName = [90, 87, 65, 45, 34, 23, 37, 69, 70, 28, 56, 78];
let coligLength = coligName.length;
for (let i = 0; i < coligLength; i++){
    let element = coligName[i];
    console.log(element);
    if (i > 4) {
        console.log("Program Terminate");
        break;
    }
}