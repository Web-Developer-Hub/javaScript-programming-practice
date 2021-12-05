// this is my object distruring programe....
const myslef = {
    id: '33/18 CMT-14',
    name: 'Habibor Rahaman',
    hoby: ['Travilling', 'Coding', 'Learnin'],
    skill: {
        language: ['javaScript', 'python', 'C', 'typScript'],
        freamwork: ['rect', 'django', 'angular', 'vue'],
        myCompany: {
            nameCompany: '3s software and solution',
            empoloye: 10,
            dress: 'formal',
            phone: ['01732219', '019322314', '013774723', '0163422', '013828323'],
            addess: {
                bassaNo: '25/32',
                road: 'bonosry roade',
                distric: 'dhaka'
            },
            facility:{
                scenek: 'yes',
                tea: 'yes',
                lunch: 'yes',
                restTime: '1 houe',
                acciRome: true
            },
        },
        microsoftOffice: 'expert',
        database:'expert'
    },
    color: 'cyan',
    personality: 'lequit personality',
    age: 22,
    honnest: true,
    myFunc: function name(params) {
        const num = 100;
        const num2 = 200;
        return `${params}. i'm always fine. whats going on marf? my have $${num + num2} i so happy today.`
    }
}

// object methods call and return value andprint out....
const result = myslef.myFunc('Hello programmer, what\'s up!');
console.log(result);

console.log(myslef);
// normal way to object key access....
const id = myslef.id
const age = myslef.age;
const skills = myslef.skill;
const languages = myslef.skill.language;
const language = myslef.skill.language[1];
const company = myslef.skill.myCompany;
const companyNmae = myslef.skill.myCompany.name;
const companyAddress = myslef.skill.myCompany.addess;
const companyPhone = myslef.skill.myCompany.phone[3];
console.log(companyPhone)

// destrctur way to access object property
const { id, name, hoby, skill, color, personality, age, honnest } = myslef;
const { language, freamwork, myCompany, microsoftOffice, database } = myslef.skill;
const { nameCompany, empoloye, dress, phone, addess, facility } = myslef.skill.myCompany;
const { scenek, tea, lunch, restTime, acciRome } = myslef.skill.myCompany.facility;

// loop on phone property, its an a array..
for (const element of phone) {
    console.log(element);
}