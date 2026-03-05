// Array basics 
console.log("Array basics");
// creating arrays
let emptyArray=[];
let numArray=[1,2,3,4];
let mixedArray=[42,"hello",true,null,{name:"gola"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

// using constructor
 let fruits = new Array("Mango","Apple");
console.log(fruits);
console.log("is fruits an array?",Array.isArray(fruits));


// push: add
fruits.push("banana");
console.log(fruits);

// pop : remove
fruits.pop();
console.log(fruits);

// unshift :adds to begining
fruits.unshift("orange");
console.log(fruits);

// shift: to remove from begining
fruits.shift();
console.log(fruits);