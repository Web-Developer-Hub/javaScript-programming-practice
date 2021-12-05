//conditional program...
var isFoodReady = true;

if (isFoodReady == true) {
    console.log("i will eat food mama!");
}
else if (isFoodReady == false) {
    console.log("No, i will not eat!");
}
else {
    console.log("i dont know!");
}

// another conditon apply to this program...
var iphonePrice = 580000;
var xaiomiPhone = 10000;
var myBudget = 12000;
if (iphonePrice <= myBudget) {
    console.log('YEY! iphone diye vab nebo.');
}
else if (xaiomiPhone <= myBudget) {
    console.log("You can bought xaiomi phone!");
}
else {
    console.log("sorry! don't your anougph mony.")
}


// multiple condition use here...
var iphonePrice = 58000;
var xaiomiPhone = 10000;
var myBudget = 62000;
if (iphonePrice <= myBudget && xaiomiPhone <= myBudget ) {
    console.log('YEY! iphone diye vab nebo.');
}
else if (xaiomiPhone <= myBudget || iphonePrice <= myBudget) {
    console.log("You can bought xaiomi phone!");
}
else {
    console.log("sorry! don't your anougph mony.")
}