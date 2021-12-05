//funtion return value and how to get output this program you wil be got it.
function myFunck(massage) {
    let sms = massage;
    return sms;
}
getMasseage = myFunck("How are you javaScript developer!")
console.log(getMasseage);


//funtion return value and how to get output this program you wil be got it.  another way...
function Funck(massage) {
    let sms = massage;
    return sms;
}
let myMassege = "How are you javaScript developer!, i miss you"
getMasseage = Funck(myMassege)
console.log(getMasseage);


//funtion return value and how to get output this program you wil be got it.  multiple parameter use..
function Funck(massage, massege2, massege3) {
    let sms = massage;
    let sms2 = massege2;
    let sms3 = massege3;
    let addSMS = sms + sms2 + sms3;
    return addSMS
}
let myMassege = "How are you javaScript developer!, i miss you"
let myMassege2 = "I always miss you."
let myMassege3 = "I learn javaSvript right now"
getMasseage = Funck(myMassege, myMassege2, myMassege3)
console.log(getMasseage);