// chepest price phone find out an object..
const phonePrice = [
    {
        id: 1,
        name: 'Samsung A30',
        price: 25000,
        camera: '12mp',
        ram: '4gb',
        storaeg: '64gb'
    },
    {
        id: 2,
        name: 'Xaiomi Not 10',
        price: 25000,
        camera: '48mp',
        ram: '6gb',
        storaeg: '128gb'
    },
    {
        id: 3,
        name: 'Samsung A50',
        price: 35000,
        camera: '24mp',
        ram: '4gb',
        storaeg: '128gb'
    },
    {
        id: 4,
        name: 'iphone 12',
        price: 125000,
        camera: '16mp',
        ram: '4gb',
        storaeg: '256gb'
    },
    {
        id: 5,
        name: 'One Plus 8',
        price: 85000,
        camera: '48mp',
        ram: '8gb',
        storaeg: '256gb'
    },
    {
        id: 6,
        name: 'Xaiomi 3s prime',
        price: 11000,
        camera: '13mp',
        ram: '3gb',
        storaeg: '32gb'
    },
]
// total phone price sum..
let totalPrice = 0;
for (let i = 0; i < phonePrice.length; i++){
    const element = phonePrice[i];
    totalPrice += element.price; // totalPrice = totalPrice + element;
}
console.log("Toral price", totalPrice);

// another way to total phone price sum..
let allPrice = 0
for (const element of phonePrice){
    allPrice += element.price;
}
console.log("all phone price", allPrice);