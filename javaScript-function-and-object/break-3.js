//break use in while loop..
let i = 1;
while (i <= 10) {
    console.log(i);
    if (i == 5) {
        console.log("program terminate! \n")
        break;
    }
    i += 1;
}

//break use in for loop..
for (let i = 1; i <= 15; i++){
    console.log(i);
    if (i == 10) {
        console.log("program terminate! \n")
        break;
    }
}

//break use in array and while loop..
let studentName = ["Habib", "Allin", "Marf", "Zayen", "Jack", "Copper", "Nasa"];
let arrayLength = studentName.length;
let x = 0;
while (x < arrayLength) {
    let element = studentName[x];
    console.log(element)
    if (x > 2) {
        console.log("program terminate! \n");
        break;
    }
    x += 1;
}


//break use in array and for loop..
let coligName = ["Habib", "Allin", "Marf", "Zayen", "Jack", "Copper", "Nasa"];
let coligLength = coligName.length;
for (let i = 0; i < coligLength; i++){
    let element = coligName[i];
    console.log(element);
    if (i > 3) {
        console.log("Program Terminate");
        break;
    }
}