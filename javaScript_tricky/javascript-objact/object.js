// object property use
const student = {
    id: 144369,
    name: 'Habibor Rahaman',
    facebook: 'https://www.facebook.com',
    subject: 'Compueter Science',
    Subjects: ['data structure', 'programming in C, C++, java', 'system software', 'operating system'],
    address: 'Dahaka-Bnaglades'
}
// getting all properties keys name
const keys = Object.keys(student);
console.log(keys);

// getting all properties keys value
const keysValues = Object.values(student);
console.log(keysValues);

//gettings to keys and values pares...
const pairs = Object.entries(student);
console.log(pairs);

//this means bobject totaly freeze no property value change and delete....
Object.freeze(student);

// this meanes dont delete property...
Object.seal(student);
student.address = 'Bownani-Dhaka-Dangladesh'

// delete to any property of stutent object
delete student.facebook;
console.log(student);