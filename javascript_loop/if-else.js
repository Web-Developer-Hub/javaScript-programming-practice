// applay if else condition in array...using while loop..
let carName = ["BMW", "Toyota", "Marcidise", "Voxwagen", "Lambargini", "Vogati", "Farrary", "Nisan"];
if (carName.length <= 10) {
    let i = 0;
    while (i < carName.length) {
        let element = carName[i];
        console.log(element);
        i += 1;
    }
}
else {
    console.log("Condition don't match!")
}

console.log("Program terminate here! \n")


// applay if else condition in array...using for loop.
let secondCarName = ["BMW", "Toyota", "Marcidise", "Voxwagen", "Lambargini", "Vogati", "Farrary", "Nisan"];
if (secondCarName.length <= 10) {
    for (let i = 0; i < secondCarName.length; i++){
        element = secondCarName[i];
        console.log(element);
    }
}
else {
    console.log("Condition don't match!")
}