// chakes to jonathon element have an array.and input parameter chaked to validation..
function bigName(friends) {
    if (Array.isArray(friends) == false) {
        const getError = 'Please give me an array as input';
        return getError;
    }
    else {
            if (friends.indexOf('jonathon') != -1) {
                return 'already exsist';
            }
            else {
                return 'Sorry Dnot\'t Get This Element';
            }
        }
    }

const friendName = ['marf', 'jonathon', 'allen boff', 'justin beiber', 'ed sheeran', 'gomej']
const result = bigName(friendName);
console.log(result);
