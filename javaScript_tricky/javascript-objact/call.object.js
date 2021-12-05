const habib = {
    id: 144369,
    name: 'Habibor Rahaman',
    money: 6300,
    mejor: 'computer science',
    subjects: ['Operating system', 'Algorithom', 'Data stucture', 'Mathematics', 'Programming in java'],
    bestFriend: ['Rifat', 'Tarek', 'Wahid', 'muttakin', 'sakil', 'siyam', 'arafat'],
    treatDew: function (expense, treat, tax) {
        this.money = this.money - expense - treat - tax;
        return this.money;
    }
}
const result = habib.treatDew(480, 30, 20);
console.log(result);

//another object here..use call
const wahid = {
    id: 144575,
    name: 'Wahidur Rahaman',
    money: 8400,
    mejor: 'computer science',
    subjects: ['Operating system', 'Algorithom', 'Data stucture', 'Mathematics', 'Programming in java'],
    bestFriend: ['Habib', 'Tarek', 'Wahid', 'Niloy', 'siyam', 'arafat'],
}
const wahidTreat = habib.treatDew.call(wahid, 1443, 50, 25);
console.log(wahidTreat);


//another object here..use call
const rifat = {
    id: 144895,
    name: 'Rifat',
    money: 9700,
    mejor: 'computer science',
    subjects: ['Operating system', 'Algorithom', 'Data stucture', 'Mathematics', 'Programming in java'],
    bestFriend: ['Habib', 'Tarek', 'Wahid', 'Niloy', 'siyam', 'arafat'],
}
const rifatTreat = habib.treatDew.call(rifat, 2117, 100, 28);
console.log(rifatTreat);
