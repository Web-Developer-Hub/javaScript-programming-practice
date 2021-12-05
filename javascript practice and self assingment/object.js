// declear a object and access to property another way..
const laptop = {
    id: 1,
    model: 'apple macbook pro',
    price: 135000,
    ram: '8gb',
    ssd: '512gb',
    color: 'space grya'
}
//third way to acces property in object
laptop.price = 125000;
laptop['ram'] = '16gb';
const propety = 'model';
laptop[propety] = 'apple macbook pro 2021'
console.log(laptop);