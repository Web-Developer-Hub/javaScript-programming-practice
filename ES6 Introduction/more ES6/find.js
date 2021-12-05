// find use in array..find big number in array, find return to first big number
const number = [34, 23, 12, 13, 16, 19, 37, 38, 44, 10, 32]
const result = number.find((params) => params > 20);
console.log(result);

// find use in array..find small number in array, find return to first small number
const number2 = [34, 23, 12, 13, 16, 19, 37, 38, 44, 10, 32]
const result2 = number2.find((params) => params < 20);
console.log(result2);


// filter use in array of object..
const products = [
    {id: 1, name: 'xaiomi 3s prime', price: 11500, color: 'silver', ram: '3gb', rom: '32gb'},
    {id: 2, name: 'vivo 3s prime', price: 12500, color: 'black silver', ram: '3gb', rom: '64gb'},
    {id: 3, name: 'xaiomi not 10', price: 19500, color: 'gray', ram: '4gb', rom: '64gb'},
    {id: 4, name: 'samsung galaxy not 10', price: 113500, color: 'dark black', ram: '6gb', rom: '256gb'},
    {id: 5, name: 'oppo f12 mini', price: 16500, color: 'black blue', ram: '3gb', rom: '64gb'},
    {id: 6, name: 'alcatel C20', price: 13500, color: 'silver', ram: '3gb', rom: '32gb'},
    {id: 7, name: 'iphone 13 pro max', price: 135000, color: 'black blue', ram: '3gb', rom: '512gb'},
    {id: 8, name: 'realme C25', price: 15500, color: 'green', ram: '4gb', rom: '64gb'},
    {id: 9, name: 'walton promio Z12', price: 14500, color: 'black blue', ram: '3gb', rom: '32gb'},
    {id: 10, name: 'syemphony X50', price: 10500, color: 'navi blue', ram: '2gb', rom: '16b'},
]

// chipest price array of object find out, find to return first chipest price phone
const chipPrice = products.find((params) => params.price < 12000);
console.log(chipPrice);

//rom 64gb product findout...find to return first 64gb phone return find
const phoneRom = products.find((product) => product.rom === '64gb');
console.log(phoneRom);

// black blue color product findout....find to return first black blue color phone
const blackColor = products.find((product) => product.color === 'black blue');
console.log(blackColor);