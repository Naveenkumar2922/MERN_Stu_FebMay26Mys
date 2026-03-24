// Handling the error event in EventEmmiter
const EventEmitter= require ("events");

const fileEmitter = new EventEmitter();

// register an error listener
fileEmitter.on("error",function(errorMessage){
console.log("emitter handler error",errorMessage);
});
// Normal eventlistener: Happy scenario
fileEmitter.on("fileprocessed",function(fileName){
console.log("file processed successfully",fileName);
});

fileEmitter.emit("fileprocessed","report.csv");
fileEmitter.emit("error","file processing  failed.");

