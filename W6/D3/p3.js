// Reading and writing files asynchronously with callbacks
const fs =require("fs");
const path=require("path");
const filepath=path.join(__dirname,"async-note.text");
// to write to a file 
fs.writeFile(
    filepath,
    "this is written asynchronously using writefile()",
    function(writeError){
        if(writeError){
            console.log("write Error:",message);
            return;
        }
        console.log("File written asynchronously");
    }
);
// read from a file 
const content = fs.readFile(filepath,"utf-8",
    function(readError,content){
        if(readError){

        
        console.log("read error:",readError.message);
        return;
        }
 
    console.log(content);
    }
);
console.log("script continues while file operation are in progress");
