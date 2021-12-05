// compare object here...
const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;
if (first === second) {
    console.log('there are equal...');
}
else {
    console.log('thre are not equal...')
}

// another way to compare..
if (first === third) {
    console.log('there are equal...');
}
else {
    console.log('thre are not equal...')
}

// another way to compare..use stringify..
if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log('there are equal...');
}
else {
    console.log('thre are not equal...')
}

const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1 };

if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log('there are equal...');
}
else {
    console.log('thre are not equal...')
}

// object chake to coustom...
const comapareObject = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const key in obj1) {
        if (Object.hasOwnProperty.call(obj1, key)) {
            if (obj1[key] !== obj2[key]) {
                return false
            }
        }
    }
    return true
}
const compareResult = comapareObject(first2, second2);
console.log(compareResult);