// remove duplicate element of an array..and input parameter chaked to validation..
function bigName(friends) {
    if (Array.isArray(friends) == false) {
        const getError = 'Please give me an array as input';
        return getError;
    }
    else {
        const unickArray = []
        for (let i = 0; i < friends.length; i++){
            const element = friends[i];
            if (unickArray.indexOf(element) == -1) {
               unickArray.push(element)
            }
        }
        return unickArray;
    }
}

const friendName = ['marf', 'jonathon', 'ed sheeran', 'allen boff', 'justin beiber', 'ed sheeran', 'gomej']
const result = bigName(friendName);
console.log(result);