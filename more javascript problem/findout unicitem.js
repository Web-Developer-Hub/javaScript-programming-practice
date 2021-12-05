// find out unic item in array...and remove dupliacte item in array.. use (for of) its super set of for loop..
// its use on array...
const friendName = ["habib", "tarek", "wahid", "allen", "jack", "marf", "pitter", "wahid", "allen", "pitter"]
function removeDuplicate(items) {
    const unicItem = [];
    for (const element of items){
        if (unicItem.indexOf(element) == -1) {
            unicItem.push(element);
        }
    }
    return unicItem;
}
const getResult = removeDuplicate(friendName);
console.log(getResult);