// total sales find out.
function totalSales(shirtSale, pantSale, shoesSale) {
    const type1 = typeof (shirtSale);
    const type2 = typeof (pantSale);
    const type3 = typeof (shoesSale);
    if (type1 != 'number' || type2 != 'number' || type3 != 'number') {
        console.log('please input integer number?')
    }
    else {
        const totalSaleSum = (shirtSale * 100) + (pantSale * 200) + (shoesSale * 500);
        return totalSaleSum;
    }
}
const shirt = 5;
const pant = 4;
const shoes = 2;
const getTotalSale = totalSales(shirt, pant, shoes);
console.log(getTotalSale);