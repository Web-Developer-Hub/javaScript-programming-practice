//object methods 
const student = {
    id: 144369,
    name: 'Habibor Rahaman',
    money: 6300,
    mejor: 'computer science',
    subjects: ['Operating system', 'Algorithom', 'Data stucture', 'Mathematics', 'Programming in java'],
    bestFriend: ['Rifat', 'Tarek', 'Wahid', 'muttakin', 'sakil', 'siyam', 'arafat'],
    myResult: {
        computer: 78,
        operatingSystem: 76,
        serveillence: 71,
        logigSystem: 83,
        javaProgramming: 85,
        problemSolving: 98,
        objectOriented: 97,
    },
    //use arrow function..
    myCount: (resultObj, name) => {
        let sum = 0
        const values = Object.values(resultObj);
        for (let i = 0; i < values.length; i++) {
            const element = values[i];
            sum += element;
        }
        return `Your total result is ${sum} move on ${name}`;
    },
    result: {
        computer: 78,
        operatingSystem: 76,
        serveillence: 71,
        logigSystem: 83,
        javaProgramming: 85,
    },
    //use normal function...
    countResult: function () {
        const values = Object.values(this.result)
        let sum = 0;
        for (let i = 0; i < values.length; i++) {
            const element = values[i];
            sum += element;
        }
        return `Your totla result is ${sum}, keep you on ${this.name}.`;
    },
    assignment: {
        computer: 2,
        operatingSystem: 3,
        serveillence: 3,
        logigSystem: 4,
        javaProgramming: 5,
    },
    countAssignment: function () {
        const s = { computer, operatingSystem, serveillence, logigSystem, javaProgramming } = this.assignment;
        const sum = computer + operatingSystem + serveillence + logigSystem + javaProgramming;
        return `Your have ${sum} assignment`;
    },
    giveTrite: function (expense) {
        this.money = this.money - expense;
        console.log(this.money)
    },

    takeRisk: (x) => {
        console.log(`${x} take more risk then you will be success`)
    },
    namePrint: (name) => {
        return `My name is ${name}`
    }
}

const result = student.namePrint(student.name);
console.log(result)

student.takeRisk(student.name);
student.giveTrite(500);
student.giveTrite(800);

const total = student.countAssignment();
console.log(total);

const totalResult = student.countResult();
console.log(totalResult);

const myTotalResult = student.myCount(student.myResult, student.name)
console.log(myTotalResult);