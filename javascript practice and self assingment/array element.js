// looping on array.. using for loop..
const freiends = ['Habib', 'Marf', 'Allen', 'Shem', 'Julio', 'jonson'];
for (let i = 0; i < freiends.length; i++){
    const element = freiends[i];
    console.log(element);
}

// looping on array..using for of loop
const myFreiends = ['Habib', 'Marf', 'Allen', 'Shem', 'Julio', 'jonson'];
for (const element of myFreiends){
    console.log(element);
}

// looping on array..using while loop
const herFreiends = ['Habib', 'Marf', 'Allen', 'Shem', 'Julio', 'jonson'];
let i = 0;
while (i < herFreiends.length) {
    const element = herFreiends[i];
    console.log(element);
    i += 1;
}