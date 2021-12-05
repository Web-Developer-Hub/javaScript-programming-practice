//continue use in array and while loop..
let studentName = [67, 76, 12, 34, 56, 78, 87, 90, 98, 33, 26, 65];
let arrayLength = studentName.length;
let x = 0;
while (x < arrayLength) {
    let element = studentName[x];
    x += 1;
    if (x == 3) {
        console.log("program terminate")
        continue;
    }
    console.log(element);   
}


//continue use in array and for loop..
let coligName = [12, 34, 56, 67, 78, 90, 98, 65, 43, 32, 14];
let coligLength = coligName.length;
for (let i = 0; i < coligLength; i++){
    let element = coligName[i];
    if (i == 4) {
        console.log("program terminate")
        continue;
    }
    console.log(element);
}