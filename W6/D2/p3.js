// Event loop with multiple asynchronous tasks
console.log("main script started");

setTimeout(()=>{
    console.log("Timer A finished after  500ms")
},500);

setTimeout(()=>{
    console.log("Timer B finished after 100ms")
},100);

setTimeout(()=>{
    console.log("Timer C finished after 0ms,but still wait for sync code to complete");
},0);

console.log("main script ended");