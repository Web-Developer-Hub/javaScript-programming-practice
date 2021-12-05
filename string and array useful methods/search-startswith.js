//search product using while loop nad startWith...
const products = [
    'Lanavo yoga Laptop',
    'Samsung Galaxy S10+ Phone',
    'Apple Xs Aax Pro phone',
    'Apple mackBook pro Laptop',
    'Dell Inspire laptop',
    'hp ElitBook laptop',
    'Yoga 650M laptop',
    'Asus zenbook Laptop',
    'Waltopn pro book Laptop',
    'Google Pixel phone',
    'Xaiomi Mi 10 Pro Phone'
]
const search = 'apple'; // PHONE, Phone, phone get output will be same beascse convert toLowerCase();
const output = [];
let i = 0;
while (i < products.length) {
    const element = products[i];
    if (element.toLowerCase().startsWith(search.toLowerCase())) {
        output.push(element);
    }
    i += 1;
}

console.log(output);