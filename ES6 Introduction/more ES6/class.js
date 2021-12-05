// class in javascript create a simple object using class and constructor...
class Person{
    id;
    name;
    designation;
    phone;
    address;
    startSession() {
        return `${this.name} start a support session.`
    }
    constructor(id, name, designation, phone, address) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.phone = phone;
        this.address = address;
    }
}

const habib = new Person(
    1,
    'Habibor Rahanab',
    ['programmer', 'software developer', 'webdeveloper'],
    '+88 01768280237',
    'Dhaka-1207',
);

const zahid = new Person(
    2,
    'Zaheed Sabure',
    'software engineer at google',
    '+9923737198',
    'Swizer land',
);

const marf = new Person(
    3,
    'Marf',
    'Backend Developer',
    '+9929309198',
    'United State',
);

const josef = new Person(
    4,
    'Josef',
    'software engineer at amazon',
    '+990238393',
    'Floria, USA',
);
console.log(habib.startSession());
console.log(habib);
console.log(zahid.startSession());
console.log(zahid);
console.log(marf.startSession());
console.log(marf);
console.log(josef.startSession());
console.log(josef);