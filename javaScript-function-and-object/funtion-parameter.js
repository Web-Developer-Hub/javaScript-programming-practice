// use parameter use an function...
function showSMS(sms) {
    console.log(sms);
}
showSMS("Hello programmer how can i help you");


// use parameter use an function...different way..
function myShowSMS(sms) {
    console.log(sms);
}
let textSMS = "Hello programmer how can i help you"
myShowSMS(textSMS);


// use parameter use an function...different way..
function yourShowSMS(sms) {
    let newSMS = sms;
    console.log(newSMS);
    console.log("Hello programmer!")
}
let mySMS = "Hello programmer how can i help you"
yourShowSMS(mySMS);
