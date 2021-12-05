const habib = {
    id: 144369,
    name: 'Habibor Rahaman',
    money: 6300,
    mejor: 'computer science',
    subjects: ['Operating system', 'Algorithom', 'Data stucture', 'Mathematics', 'Programming in java'],
    bestFriend: ['Rifat', 'Tarek', 'Wahid', 'muttakin', 'sakil', 'siyam', 'arafat'],
    treatDew: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
}

const result = habib.treatDew(480);
console.log(result);


//another object here..use bind
const wahid = {
    id: 144575,
    name: 'Wahidur Rahaman',
    money: 8400,
    mejor: 'computer science',
    subjects: ['Operating system', 'Algorithom', 'Data stucture', 'Mathematics', 'Programming in java'],
    bestFriend: ['Habib', 'Tarek', 'Wahid', 'Niloy', 'siyam', 'arafat'],
}
const whaidTreat = habib.treatDew.bind(wahid);
whaidTreat(1140)
whaidTreat(643)
console.log(wahid);


//another object here..use bind
const rifat = {
    id: 144895,
    name: 'Rifat',
    money: 9700,
    mejor: 'computer science',
    subjects: ['Operating system', 'Algorithom', 'Data stucture', 'Mathematics', 'Programming in java'],
    bestFriend: ['Habib', 'Tarek', 'Wahid', 'Niloy', 'siyam', 'arafat'],
}
const rifatTreat = habib.treatDew.bind(rifat);
rifatTreat(1450)
rifatTreat(987)
console.log(rifat);