// find out price 500 object in array..
const product = [
    { name: 'samsung s5', price: 23000, color: 'gray' },
    { name: 'xaiomi not 10', price: 19500, color: 'black blue' },
    { name: 'calculator', price: 5000, color: 'black' },
    { name: 'chacing', price: 200, color: 'red' },
    { name: 'cover', price: 5000, color: 'green' },
    { name: 'madicin', price: 400, color: 'yellow' },
    { name: 'laptop', price: 25000, color: 'silver' },
]
const result = product.find((param) => param.price === 5000);
console.log(result);

//use forech
product.forEach((params) => {
    console.log(params);
});
product.forEach((params) => {
    console.log(params.name);
});

// more shortcut use forech
product.forEach((params) => console.log(params));
product.forEach((params) => console.log(params.name));