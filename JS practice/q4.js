let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
//concat method
let result = holdCabinet1.concat(holdCabinet2); 
console.log(result);
// slice of two elements from each array
console.log(holdCabinet1.slice(2),holdCabinet2.slice(2));
// reverse the first array, and sort the second
console.log(holdCabinet1.reverse());
console.log(holdCabinet1.sort());