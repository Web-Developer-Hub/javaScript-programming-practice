const student = {
    id: '33/18',
    name: 'Habibor Rahaman',
    roll: '144369',
    subject: 'Computer science',
    shift: 'morning',
    studentQuelity: 'Very Good',
    address: 'Dhaka, Bnagladesh'
}
for (const key in student){
    const element = student[key]
    // console.log(key, element);
}

// use for in loop..
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        // console.log(key, element)
    }
}

// another way to key value..
const keys = Object.keys(student)
for (const props of keys) {
    const values = student[props];
    // console.log(props, values)
}

//aonther way to looping on object..
const towDArray = Object.entries(student);
for (const [key, value] of towDArray) {
    console.log(key, value)
}