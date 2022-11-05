let str = 'In space, no one can hear you code.';
//spilt()
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(''));
//array join
let arr = ['B', 'n', 'n', 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));
//spilt and join none operation spilt is convert a string to array && join use to get all element
//Combine a string
let s1="water,space suits,food,plasma sword,batteries";
s1=s1.toUpperCase();
s1=s1.replaceAll(',',' ');
console.log(s1);