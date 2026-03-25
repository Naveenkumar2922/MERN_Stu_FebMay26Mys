// Imtroduction to Buffers in NodeJS
//  A buffer stores raw bytes
// here we create buffer directly from a string
const textBuffer =  Buffer.from("Naveen");

// value  in the buffer is the encoded form of the text
console.log("Buffer object :",textBuffer);
console.log("Buffer length in bytes :",textBuffer.length);
console.log("byte at  index 0",textBuffer[0]);

// each character is store internally as byte data
// for standard ASCII letters there will be a equivalent code 
// buffers store numeric value b/w 0 to 255
