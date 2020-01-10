const _ = require('lodash');
const xlsx = require('xlsx');
//Book1

const workbook = xlsx.readFile(`C:/Users/abhishek.kumar/Documents/Book1.xlsx`);
const worksheet = workbook.Sheets[workbook.SheetNames];

console.log( workbook);

// console.log(workbook.Sheets)

const columnA = [];

for (let z in worksheet) {
  if( /^[A-Z]*1$/.test(z.toString()))
    columnA.push(worksheet[z].v);


}

console.log(columnA);