// process.nextick,promise microtask & timer
console.log("1. start of script");

// process.nextTick a callback to  run soon after the current synchronous code completes.
process.nextTick(function(){
    console.log("3. process,nextTick callback executed");
});

// promise  microtask runs after  nextTick in NodeJS
Promise.resolve().then(function(){
    console.log("4.promise microtask executed")
});

// callback  timer runs later
setTimeout(() => {
    console.log("timer callback executed");
}, 0);
console.log("2.End of script");