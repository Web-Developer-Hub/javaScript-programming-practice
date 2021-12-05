// object destructuring here
const myObject = {
    name: 'Habibor Rahaman',
    age: 22,
    phone: '01768280237',
    hoby: 'good programmer',
    language: ['javasvript', 'python', 'C', 'typscript'],
    framwork: ['react', 'django', 'angular', 'vue', 'node js'],
    myPc: {
        processor: 'intel i5',
        ram: '16gb',
        ssd: 'trnsent 256gb',
        monitor: 'LG 21 inch',
        myCollection: ['macbook pro 2020', 'iphone 13 pro max', 'asus zenbook pro'],
        books: (params) => {
            let strorBooks = '';
            for (const element of params) {
                strorBooks += element + ', '
            }
            return strorBooks;
        }
    }
}
const { name, age, phone, hoby, language, framwork, myPc } = myObject;
const [a, b, c, d] = [...language];
console.log(a);
const [x, y, z, n, u] = [...framwork];
console.log(u);
const { processor, ram, ssd, monitor, myCollection, books } = myPc;
console.log(processor);
console.log(books(['black whole', 'stars ware', 'astrology', 'histro of my wordld']));
const [fist, second, third] = [...myCollection];
console.log(third);
