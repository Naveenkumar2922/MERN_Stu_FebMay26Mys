const { Buffer } = require("buffer");

// Allocating buffers  
const emptyBuffer=Buffer.alloc(8);
console.log("Contents of emptyBuffer:",emptyBuffer);
console.log("Allocated of buffer bytes:",[...emptyBuffer]);

const textBuffer =  Buffer.from([4,61,76,65,65,6]);
console.log("Buffer from byte array:",textBuffer);

// Buffer .write() writes text into the buffer
const buffer=Buffer.alloc(28);
const bytesWritten=buffer.write("helloWorld")
console.log("bytes written:",bytesWritten);

// subarray
const firstSlice = buffer.subarray(3,6);
console.log("first slice is bytes:",[...firstSlice]);

// decode the bytes into text:tostring()
console.log("Decode firstslice of buffer:",firstSlice.toString("utf-8"));



