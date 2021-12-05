// search product usein for loop and startsWith..
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
    'Xaiomi Mi 10 Pro Phone',
    'dell pro macbook laptop',
    'Dell iron man Laptop',
]
const search = 'dell'; // LAPTOP, Laptop, laptop get output will be same beascse convert toLowerCase();
const output = [];
for (let i = 0; i < products.length; i++){
    const element = products[i];
    if (element.toLowerCase().startsWith(search.toLowerCase())) {
        output.push(element);
    }
}
console.log(output);