// search product to an object
// chepest price phone find out an object.. use while loop
const products = [
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

function searchProducts(products, searchText) {
    const matched = [];
    let i = 0;
    while (i < products.length){
        const element = products[i];
        if (element.name.indexOf(searchText) != -1) {
            matched.push(element)
        }
        i += 1;
    }
    return matched;
}
const searchText = 'Xaiomi';
const getResult = searchProducts(products, searchText);
console.log(getResult);