// class in javascript create a simple object using class and constructor...

// this is my common class for for all class...
class MyCommonClass{
    id;
    name;
    designation;
    phone;
    address;
   
    constructor(id, name, designation, phone, address) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.phone = phone;
        this.address = address;
    }
}

//this is Person class here using extra constactor
class Person extends MyCommonClass{
    work;
    constructor(id, name, designation, phone, address, work) {
        super(id, name, designation, phone, address,)
        this.work = work;
    }
    startSession() {
        return `${this.name} start a support session.`
    }
}


//this is my FacebookMaintenance class, here using extra constactor
class FacebookMaintenance extends MyCommonClass{
    work;
    constructor(id, name, designation, phone, address, work) {
        super(id, name, designation, phone, address)
        this.work = work;
    }
    buildARouting(employe) {
        return `${this.name} build a routin for ${employe}`
    }
}


//this is my UpdateFacebook class, here using extra constactor
class UpdateFacebookApp extends MyCommonClass{
    appVersion;
    releseDate;
    appSize;
    work;
    constructor(id, name, designation, phone, address, appVersion, releseDate, appSize, work) {
        super(id, name, designation, phone, address)
        this.appVersion = appVersion;
        this.releseDate = releseDate;
        this.appSize = appSize;
        this.work = work;
    }
 
    updateApp(student) {
        return `${this.name} update app for bilions of users ${student}`
    }
}

// extend all propertice on derive class, here does not using extra constactor, but extends common constructor..
class AmazonWevService extends MyCommonClass{
    passionate(coding) {
        return `${this.name} is genious a programmer. he always write ${coding}.`
    }
}


const habib = new Person(
    1,
    'Habibor Rahanan',
    ['programmer', 'software developer', 'webdeveloper'],
    '+88 01768280237',
    'Dhaka-1207',
    'At Google',
);

const zahid = new Person(
    2,
    'Zaheed Sabure',
    'software engineer at google',
    '+9923737198',
    'Swizer land',
    'At Google',
);

const marf = new Person(
    3,
    'Marf',
    'Backend Developer',
    '+9929309198',
    'United State',
    'At Google',
);

const josef = new Person(
    4,
    'Josef',
    'software engineer at amazon',
    '+990238393',
    'Floria, USA',
    'At Google',
);

// this is FacebookMaintance class
const allen = new FacebookMaintenance(
    5,
    'allen',
    'software engineer at facebook',
    '+9989492673',
    'clombia, USA',
    'At facebook'
)

// this is FacebookAppRelease class
const whatson = new UpdateFacebookApp(
    6,
    'whatson',
    'software engineer at facebook',
    '+997329389',
    'united state, USA',
    '4.4.0',
    '01-10-2021',
    '45MB',
    'At Facebook Corporation'
)

// this is FacebookMaintance class
const habibor = new AmazonWevService(
    6,
    'Habibor Rahaman (Habib)',
    'software engineer at Amazon',
    '+7789492673',
    'Canada',
    'At Amazon cloud web servies'
)

console.log(habib.startSession());
console.log(habib);
console.log(zahid.startSession());
console.log(zahid);
console.log(marf.startSession());
console.log(marf);
console.log(josef.startSession());
console.log(josef);
console.log(allen)
console.log(allen.buildARouting('facebook'));
console.log(whatson)
console.log(whatson.updateApp('work at facebook corporation.'));
console.log(habibor)
console.log(habibor.passionate('code'))