// Reading and writing files synchronously
const fs= require("fs");
const path =require("path");

const filepath =path.join(__dirname,"sync-note.txt");
// fs.writeFileSync(filepath,"this file was written using writeFileSync().\nsynchronous operation block execution");
// Append to a file 
fs.appendFile(filepath,"new text added using fs.appendfile.",
    function(error){
        if(error){
            console.log("append error:",error.message);
            return;
        }
        console.log("file content appended");
    }
);

console.log("File written Synchronously");
const content = fs.readFileSync(filepath,"utf-8");
console.log("file read synchronously");
console.log("file content:\n",content);
                                        