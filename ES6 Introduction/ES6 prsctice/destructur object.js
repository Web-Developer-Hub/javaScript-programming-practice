const products = {
    name: 'iphone 13 pro max',
    color: 'drak blue',
    price: '$1350',
    ram: '6GB',
    rom: '512GB',
    camera: '16mp',
    fitures: {
        secsor: "LED",
        antivirus: 'protectore',
        glass: 'corning gorila glass',
        tuch: 'noucth tuch',
        screen: 'OLED Tuch Screen',
        language: ['english', 'japanise', 'china', 'spanish', 'frech'],
        technlogy: {
            finger: true,
            chip: '7 neno metare',
            speed: 'super first',
            apllication: ['facebook', 'twitter', 'instragram', 'linkdin', 'google']
        }
    }
}

// oject destructureing here
const { name, color, price, ram, rom, camera, fitures } = products;
const { secsor, antivirus, glass, tuch, screen, language, technlogy } = fitures;
const [a, b, c, d, e] = [...language];
const { finger, chip, speed, apllication } = technlogy;
const [x, y, z, n, q] = [...apllication]
console.log(apllication);

// array desturctureing here..
const number = [34, 56, 43, 28, 45, 65];
const [third] = [number[2]];
console.log(third);