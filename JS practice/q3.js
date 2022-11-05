let array=['1138','space suits','parrot','instruction manual','meal packs','space tether','20 meters'];
// Insert key at 3rd position
array.splice(3,0,'keys');
// remove element
let re=array.indexOf('instruction manual');
array.splice(re,1);
//replace element
array.splice(2,3,'cat', 'fob','string cheese');
//print array
console.log(array);