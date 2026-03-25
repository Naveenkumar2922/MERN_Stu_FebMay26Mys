// Reading & writing files asynchronously with fs/promises
const fs =require("fs/promises");
const path = require("path");

async function runPromiseBasedFileFlow(){
    const filepath=path.join(__dirname,"async-note.text");
    try{
        await fs.writeFile(filepath,
            "written  using fs/promises. this works with async/await"
        );
        console.log("file written usiing fs/promises");
        const content = await fs.readFile(filepath,"utf-8");
        console.log(content);
    }
    catch(error){
        console.log("promises-based fs error:",error.message);
    }
}
runPromiseBasedFileFlow();