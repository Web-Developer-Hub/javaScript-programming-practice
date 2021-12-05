// difind an object and access there property....
let person = {
    id: 14,
    name: "Habibor Rahaman",
    phone: "01768280237",
    age: 21,
    hoby: "Computer Programmer",
    email: "habibor144369@gmail.com",
    address: "Sirajdikhan, Munshigonj"
}
console.log(person); // show full object...
console.log(person.name); // read property
console.log(person.age); // read property
let myHoby = person.hoby; // read property
console.log(myHoby)

// property value update... first way
let data = person.address = "Dhaka Mohammodpur";
console.log(data)
console.log(person);

// property value update... second way
let newAge = person["age"] = 22;
console.log(newAge);
console.log(person);

// property value update... third way
let newContact = "phone";
let myPhone = person[newContact] = "01311606870"
console.log(myPhone);
console.log(person);



//my second object here...
let laptop = {
    model: "hp elitbok 8470p",
    serial: "H2002",
    brand: "HP elitbook",
    RAM: "4gb",
    processor: "i5",
    display: "14 inc",
    price: "45000 TK"
}
console.log(laptop); // show full object...
console.log(laptop.brand); // read property
console.log(laptop.RAM); // read property
let laptopDisplay = laptop.display; // read property
console.log(laptopDisplay)

//property update first way...
let newLaptopPrice = laptop.price = 50000; // upadate object property value...
console.log(newLaptopPrice);
console.log(laptop); //print full object

//property update second way...
let newRAM = laptop["RAM"] = "8GB"; // upadate object property value...
console.log(newRAM);
console.log(laptop);

//property update third way...
let oldProcessor = "i5"
let newProcessor = laptop[oldProcessor] = "Intel i7"; // upadate object property value...
console.log(newProcessor);
console.log(laptop);
