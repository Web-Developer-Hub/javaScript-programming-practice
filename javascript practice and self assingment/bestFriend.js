// best friend find out in program.. using while loop.. serch big string
function getBestFriend(friends) {
    let justFriend = friends[0];
    let i = 0;
    while (i < friends.length) {
        const element = friends[i];
        if (element.length > justFriend.length) {
            justFriend = element;
        }
        i += 1;
    }
    return justFriend;
}

const friend = ['habib', 'ed sheeran', 'justin beiber', 'habibor rahaman', 'allen', 'markjuker barg'];
const myBestFriend = getBestFriend(friend);
console.log(typeof (myBestFriend));
console.log(myBestFriend);