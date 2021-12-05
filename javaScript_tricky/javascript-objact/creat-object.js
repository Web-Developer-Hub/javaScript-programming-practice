// deifferent way to create object
//first way to create object..
const student = { name: 'Habibor Rahaman', roll: 14, address: 'Dhaka-Bangladesh', facebookLink: 'https://www.facebook.com?id=#kjsfu8934ri' }

// second way to create object..and another way to add property..
const habib = new Object();
habib['name'] = 'habibor';
habib.roll = 1434;
const address = 'address'
habib.address = 'bangladesh';
const studentAge = 'age';
habib[studentAge] = 21;

// third way to create and inherit to common object object and another way to add property..
const common = {brand: 'ferarry', country: 'United State', established: 1968, quality: 'good'}
const car = Object.create(common)
car['name'] = 'ferarry V11';
car.model = '#100NS@';
const color = 'color';
car.color = 'merun';
const cc = 'CC'
car[cc] = '1200CC'
console.log(car)

// creat a object by class...
class People { 
    constructor(name, age, religion, profession) {
        this.name = name;
        this.age = age;
        this.religion = religion;
        this.profession = profession;
    }
};
const names = 'mr. been';
const age = 60;
const religion = 'united state';
const profession = 'actor'

const person = new People(names, age, religion, profession);
console.log(person)

// create a objec by function.....
function Mahmudullah(id, name, age, religion, honnest) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.religion = religion
    this.honnest = honnest;
};
const id = 2342;
const name1 = 'mahmudullah';
const age1 = 5;
const religion1 = 'Bangladesh';
const honnest = true;

const mahmudullah = new Mahmudullah(id, name1, age1, religion1, honnest);
console.log(mahmudullah)


// create a object by  function..
function Abdullah(id, name, age, religion, honnest){
    this.id = id;
    this.name = name;
    this.age = age;
    this.religion = religion
    this.honnest = honnest;
}
const id2 = 4322;
const name2 = 'Abdullah';
const age2 = 7;
const religion2 = 'Bangladesh';
const honnest2 = true;


const abdullah = new Abdullah(id2, name2, age2, religion2, honnest2);
console.log(abdullah)