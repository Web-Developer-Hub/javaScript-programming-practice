const student = {
    id: 144369,
    name: 'Habibor Rahaman',
    result: {
        computer: 87,
        dataStructure: 81,
        java: 92,
        javaScript: 94,
        C: 97,
        python: 90
    },
    bestFreind: ['Rifat', 'tarek', 'Wahid', 'shwaon', 'arafat'],
    task: function () {
        const name = this.name;
        return name;
    }
}
const data = `computer : ${student.result.computer} 
bestFriend : ${student.bestFreind[2]}`
console.log(data);
console.log(student.task())