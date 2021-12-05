// search product usein for of loop nad endsWith..
const products = [
    'Lanavo yoga Laptop',
    'Samsung Galaxy S10+ Phone',
    'Apple Xs Aax Pro phone',
    'Apple mackBook pro Laptop',
    'Dell Inspire laptop',
    'dell Inspire book laptop',
    'hp ElitBook laptop',
    'Yoga 650M laptop',
    'Asus zenbook Laptop',
    'Waltopn pro book Laptop',
    'Google Pixel phone',
    'Xaiomi Mi 10 Pro phone',
    'Dell pro book ultra'
]
const search = 'phone'; // LAPTOP, Laptop, laptop get output will be same beascse convert toLowerCase();
const output = [];
for (element of products){
    if (element.toLowerCase().endsWith(search.toLowerCase())) {
        output.push(element);
    }
}
console.log(output);