// removinngg EventEmitter listeners

const EventEmitter =  require("events");
const jobEmitter = new EventEmitter();
 function showJobprogress(status){
    console.log("job status:",status);
 }
// add listener
jobEmitter.on("progress",showJobprogress);

// emit  the event
jobEmitter.emit("progress","50% completed");

// Remove the listener
jobEmitter.off("progress","showJobprogress");

// emit  the event
jobEmitter.emit("progress","100% completed");

