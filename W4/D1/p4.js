// logging

console.log("console logging");

console.warn("warning message");

console.error("error message");

let users =[
    {id:1,name:"vishnu"},
    {id:1,name:"varshu"},
];
console.log(users);
console.table(users);

// group the related logs
console.group("grouped logs");
console.log("log 1");
console.log("log 2");
console.log("log 3");
console.groupEnd();

// measure execution time
console.time("loop timer");
for(let i=0;i<1000;i++){}
console.timeEnd("loop timer");

