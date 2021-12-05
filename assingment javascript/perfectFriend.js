// find out perfect friend
function perfectFriend(friends) {
    if (typeof(friends) != 'object') {
        console.log('Please as an input array!')
    }
    else {
        let bestFriend = friends[0]
        for (let i = 0; i < friends.length; i++){
            const element = friends[i];
            if (element.length == bestFriend.length) {
                bestFriend = element;
            }
        }
        return bestFriend;
    }
}
const friend = ['habib', 'allen walk', 'marf', 'niloy', 'jack', 'justin'];
const myFriend = perfectFriend(friend);
console.log(typeof (myFriend));
console.log(myFriend);