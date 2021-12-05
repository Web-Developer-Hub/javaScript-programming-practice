// write a program which claculate wood..
/*
    par chairWood = 3 cft  quantity is = 14
    par tableWood = 7 cft  quantity is = 3
    par bedWood = 15 cft  quantity is = 3
    par deskWood = 5cft  quantity is = 2
*/


function woodCalulator(chair, table, bed, desk) {
    const parChairWood = 3;
    const parTableWood = 7;
    const parBedWood = 15;
    const parDeskWood = 5;
    
    const chairWoodQuantity = chair * parChairWood;
    const tableWoodQuantity = table * parTableWood;
    const bedWoodQuantity = bed * parBedWood;
    const deskWoodQuantity = desk * parDeskWood;

    const totalSumWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity + deskWoodQuantity;
    return totalSumWood;
}
const chairQuantity = 14;
const tableQuantity = 3;
const bedQuantity = 3;
const deskQuantity = 2;
const totalWood = woodCalulator(chairQuantity, tableQuantity, bedQuantity, deskQuantity);
console.log(totalWood);