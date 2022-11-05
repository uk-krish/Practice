let  cargoHold= ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//replace element
let s1=cargoHold.indexOf('slinky');
cargoHold.splice(s1,1,'space tether');
console.log(cargoHold);

//remove the element use pop()
let len=cargoHold.length;
cargoHold.pop(len-1);
console.log(cargoHold);

//remove the element use shift
let ro=cargoHold.shift();
console.log("Remove the 1st Element -->");
console.log(cargoHold);

//add element
cargoHold.unshift('1138');
cargoHold.push( '20 meters' )
console.log("Unshift  -->");
console.log(cargoHold);

//print thr element with size literal
console.log("template literal  -->");
// let fl=;
console.log(cargoHold);
console.log(`final array: ${cargoHold} && length: ${cargoHold.length}`);
