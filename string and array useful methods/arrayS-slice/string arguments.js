// string arguments add without space...
function AddString() {
    let EmptyString = '';
    for (const element of arguments) {
        EmptyString += element;
    }
    return EmptyString;
}
const result = AddString('I', 'Love', 'My', 'Country', 'Bbnagladesh');
console.log(result);


// string arguments adding with space..
function AddString2() {
    let EmptyString = '';
    for (const element of arguments) {
        EmptyString += element + ' ';
    }
    return EmptyString;
}
const result2 = AddString2('I', 'Love', 'My', 'Country', 'Bbnagladesh');
console.log(result2);