// Microtask & Macrotask in Nodejs
console.log("1. synchronous start.");

// promise.resolve(...) .then(...)  schedule a microtask
Promise.resolve().then(function(){
    console.log("3.promise microtask executed");
});

// setTimeout(...,0) schedules task for a later time
// Even  with 0 delay it doesnt interrupt current sync code
setTimeout(() => {
    console.log("4.Timer callback executed.");
},0);
console.log("2. synchronous end .");
