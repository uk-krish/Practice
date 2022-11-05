// initialize the  arrays
let element1 = ['hydrogen', 'H', 1.008]
let element2 = ['helium', 'He', 4.003]
let element26 = ['iron', 'Fe', 55.85]
//Print table to see its structure.
const promt=require('prompt-sync')();
let table=[];
let n=promt("Enter the array size: ");
for(let i=0;i<n;i++){
    table[i]=[];
}
for(let i=0;i<n;i++){
    let element=promt("Enter the Chemical Name: ");
    let symbol=promt("Enter the Chemical symbol: ");
    let value=promt("Enter the Chemical value: ");
    table[i].push(element,symbol,value);
}

console.log(table);
// table[1] and table[1][1].
console.log(table[1]);
console.log(table[1][1]);
//print the elements
console.log(element1[2]);
console.log(element2[0]);
console.log(element26[1]);