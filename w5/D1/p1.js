// Introduction to Node.js

const runtimeName="Node.js";
// console.log("Introduction to Node.js");
console.log(`${runtimeName}runs javascript outside the browser`);

const commonUses=[
    " used server-side app",  
    "automation script can be created"
];
// array dsectructuring 
// console.log(commonUses[0]);
// console.log(commonUses[1]);
commonUses.forEach((commonUse,index)=>{
    console.log(`${index+1}.${commonUse}`);


});