//break use in array and while loop..
let studentName = [34, 56, 78, 74, 98, 65, 87, 12, 35];
let arrayLength = studentName.length;
let x = 0;
while (x < arrayLength) {
    let element = studentName[x];
    console.log(element)
    if (x == 3) {
        console.log("program terminate! \n");
        break;
    }
    x += 1;
}


//break use in array and for loop..
let coligName = [45, 66, 89, 90, 33, 88, 67, 81, 76, 29, 90];
let coligLength = coligName.length;
for (let i = 0; i < coligLength; i++){
    let element = coligName[i];
    console.log(element);
    if (i == 4) {
        console.log("Program Terminate");
        break;
    }
}