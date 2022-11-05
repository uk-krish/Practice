let people = ["Greg", "Mary", "Devon", "James"];
for(let i=0;i<people.length;i++){
    console.log(people[i]);//1.print the array
}
//2.remove Greg
people.shift();
//3.remove James
people.pop();
//4.add Matt to the front
people.unshift("Matt");
//5.add your name to the end
people.push("Unnikrishnan");
//6.exit loop when mary

// for(let i=0;i<people.length;i++){
//     if(people[i].match("Mary")){
//      break;
//  }
//  i++;
//  console.log(people[i]);
// }
//7.without marry and matt
let copy = people.slice(2, people.length);
console.log(copy);
//8.index of marry
console.log(people.indexOf("Mary"));
//9.index of Foo
let f=people.indexOf("Foo");
if(f==[0-9]){
    console.log(f);
}
else{
    console.log(-1);
}
//10.add elizabeth, artie, and james
people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1);
people.splice(0,2,'Elizabeth', 'Artie');
console.log(people);
//11.add with bob
let withBob=people.concat('Bob');
console.log(withBob);
