// best friend find out in program.. using for loop.. serch big string
function bestFriend(friends) {
    let friendLength = friends[0];
    for (let i = 0; i < friends.length; i++){
        const element = friends[i];
        if (element.length > friendLength.length) {
            friendLength = element;
        }
    }
    return friendLength
}
const myFriends = ['Habib', 'Allen', 'Tarek', 'Jack', 'justin Beiber', 'Ed Sheeran']
const getBestFriend = bestFriend(myFriends);
console.log(typeof (getBestFriend));
console.log(getBestFriend);
