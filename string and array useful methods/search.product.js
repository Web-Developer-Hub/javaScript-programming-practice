// search product usein for  loop ..
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
const search = 'laptop'; // LAPTOP, Laptop, laptop get output will be same beascse convert toLowerCase();
const output = [];
for (element of products){
    if (element.toLowerCase().indexOf(search.toLowerCase()) != -1) {
        output.push(element);
    }
}
console.log(output);