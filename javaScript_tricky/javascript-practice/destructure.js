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
// object destructur...
const obj = student.result;
const { computer, dataStructure, java, javaScript, C, python } = obj;
console.log(computer)

// object property array destucture....
const obj2 = student.bestFreind;
const [f1, f2, f3, f4, f5, f6] = [obj2[0], obj2[1], obj2[2], obj2[3], obj2[4]];
console.log(f2);