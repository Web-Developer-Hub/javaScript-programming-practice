// map useing on string array
const artistName = ['habibor rahaman', 'marf', 'jack', 'thomas', 'strack', 'justin beibber', 'zayn malik'];
const result = artistName.map((params) => params)
const arraLength = artistName.map((params) => params.length)
// console.log(result);
// console.log(arraLength);


const products = [
    {id: 1, name: 'xaiomi 3s prime', price: 11500, color: 'silver', ram: '3gb', rom: '32gb'},
    {id: 2, name: 'vivo 3s prime', price: 12500, color: 'black silver', ram: '3gb', rom: '64gb'},
    {id: 3, name: 'xaiomi not 10', price: 19500, color: 'gray', ram: '4gb', rom: '64gb'},
    {id: 4, name: 'samsung galaxy not 10', price: 113500, color: 'dark black', ram: '6gb', rom: '256gb'},
    {id: 5, name: 'oppo f12 mini', price: 16500, color: 'black blue', ram: '3gb', rom: '64gb'},
    {id: 6, name: 'alcatel C20', price: 13500, color: 'silver', ram: '3gb', rom: '32gb'},
    {id: 7, name: 'iphone 13 pro max', price: 135000, color: 'space gray', ram: '3gb', rom: '512gb'},
    {id: 8, name: 'realme C25', price: 15500, color: 'green', ram: '4gb', rom: '64gb'},
    {id: 9, name: 'walton promio Z12', price: 14500, color: 'black blue', ram: '3gb', rom: '32gb'},
    {id: 10, name: 'syemphony X50', price: 10500, color: 'navi blue', ram: '2gb', rom: '16b'},
]
// alproduct consol log
products.map((params) => console.log(params));
//all product color name console log
products.map((params) => console.log(params.color));

const product = products.map((params) => params.name); //map always retur an array
console.log(product[3])
console.log(product)

// use foreach in product
product.forEach(element => {
    console.log(element)
});
