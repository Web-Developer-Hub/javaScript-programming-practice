// find out unic item in array...and remove dupliacte item in array.. use for loop
const friendName = ["habib", "tarek", "wahid", "allen", "jack", "marf", "pitter", "wahid", "allen", "pitter"]
function removeDuplicate(items) {
    const unicItem = [];
    for (let i = 0; i < items.length; i++){
        const element = items[i];
        if (unicItem.indexOf(element) == -1) {
            unicItem.push(element);
        }
    }
    return unicItem;
}
const getResult = removeDuplicate(friendName);
console.log(getResult);


// find out unic item in array...and remove dupliacte item in array.. use while loop
function unicItem(ages) {
    const unicItem = [];
    let i = 0;
    while (i < ages.length) {
        const element = ages[i];
        if (unicItem.indexOf(element) == -1) {
            unicItem.push(element);
        }
        i += 1;
    }
    return unicItem;
}
const age = [17, 23, 45, 23, 67, 78, 90, 67, 42, 52, 78, 17]
const result = unicItem(age);
console.log(result);