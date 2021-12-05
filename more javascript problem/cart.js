// total product sum......
const shoppingCart = [
    {
        id: 1,
        product: 'laptop',
        name: 'apple macbook pro 2021',
        ram: '16gb',
        ssd: '512gb',
        processor: 'intel i9',
        color: 'space gray',
        price: 186000,
        quantity: 1,
    },
    {
        id: 2,
        product: 'computer',
        name: 'intel computer',
        ram: '16gb',
        ssd: '512gb',
        color: 'black',
        processor: 'intel i7',
        monitor: '27 inch',
        price: 95000,
        quantity: 2,
    },
    {
        id: 3,
        product: 'mobile',
        name: 'iphone 10',
        color: 'silver',
        ram: '3gb',
        storage: '64gb',
        camera: '12 maga pixel',
        price: 86000,
        quantity: 3,
    },
    {
        id: 4,
        product: 'shose',
        name: 'loffer',
        brand: 'bata',
        color: 'black',
        size: 39,
        price: 2100,
        quantity: 3,
    },
    {
        id: 5,
        product: 'shirt',
        name: 'casual shirt',
        brand: 'estacy',
        color: 'black',
        size: 29,
        price: 1400,
        quantity: 3,
    }
]
// console.log(shoppingCart);

//total only price counter functonality here..use foor of loop
function myShoppingCartPrice(cart) {
    let cartTotalprice = 0;
    for (const element of cart){
        cartTotalprice += element.price;
    }
    return cartTotalprice;
}
const myTotalPrice = myShoppingCartPrice(shoppingCart);
console.log('Cart totla price', myTotalPrice);


//total price counter functonality here..includ quantity, use for of loop
function shoppingCartPrice(cart) {
    let cartTotalprice = 0;
    for (const element of cart){
        const productPrice = element.price * element.quantity;
        cartTotalprice += productPrice;
    }
    return cartTotalprice;
}
const totalPrice = shoppingCartPrice(shoppingCart);
console.log('Cart totla price include quantity', totalPrice);