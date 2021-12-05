// best friend find out in program.. using for of loop.. serch big string
function getBestFriend(friends) {
    let justFriend = friends[0]
    for (const element of friends) {
        if (element.length > justFriend.length) {
            justFriend = element;
         }
    }
    return justFriend;
}
const friend = ['habib', 'ed sheeran', 'justin beiber', 'allen', 'markjuker barg'];
const myFriend = getBestFriend(friend);
console.log(typeof(myFriend));
console.log(myFriend);