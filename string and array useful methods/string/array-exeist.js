// find out big name of an array..and input parameter chaked to validation..
function bigName(friends) {
    if (Array.isArray(friends) == false) {
        const getError = 'Please give me an array as input';
        return getError;
    }
    else {
        let friendBig = friends[0]
        for (let i = 0; i < friends.length; i++){
            const element = friends[i];
            if (friendBig.length < element.length ) {
                friendBig = element;
            }
        }
        return friendBig;
    }
}

const friendName = ['marf', 'jonathon', 'allen boff', 'justin beiber', 'ed sheeran', 'gomej']
const result = bigName(friendName);
console.log(result);