// template string use here...
const firstNmae = 'Habibor';
const lastNmae = 'Rahaman';
const fullNmae = `${firstNmae} ${lastNmae}`;
console.log(fullNmae);

const paragraph = `
Hello Habibor you are a jenius programmer in this world. keep you won brother.
your future is so bright i bilive that. you are a self leaner person in programming
community. go go ahed.
`
console.log(paragraph);

const sms = (massage1, massage2 = '. yes I love programming') => massage1 + ' ' + massage2;

const age = [34, 56, 67, 67, 54];
const text = `
This is my number here : ${age}
This is array lengrh : ${age.length}
array new element add ${age.push(100)}
array length with multiplite to 100 = ${age.length * 100}
this is my massage from arrow function ${sms('you are a jenius programmer,', 'I really love programming')}.
`
console.log(text);
console.log(age)