// call back function here...
const welComeMessage = (sms, myName) => {
    sms(myName)
}

const sms = (myName) => {
    console.log('Good morning', myName)
}
const sms2 = (myName) => {
    console.log('Good afternoon', myName)
}
const sms3 = (myName) => {
    console.log('Good evening', myName)
}
const myName = 'Habibor Rahaman';
const herNmae = 'ariyatul safa';
const sheNmae = 'jiniya afrose'
welComeMessage(sms, myName);
welComeMessage(sms2, herNmae);
welComeMessage(sms3, sheNmae);