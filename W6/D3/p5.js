// Renaming deleting & checking the file existence

const fs =require("fs");
const Path=require("path");
const originalPath=Path.join(__dirname,"draft-report.text");
const renamedPath=Path.join(__dirname,"final-report.text");

fs.writeFileSync(originalPath,"draft report content");
console.log("does draft-report.txt exists?",fs.existsSync(originalPath));

// rename
fs.renameSync(originalPath,renamedPath);
console.log("does draft-report.txt exists?",fs.existsSync(originalPath));
// delete a file

fs.unlinkSync(renamedPath);
console.log("does draft-report.txt exists?",fs.existsSync(renamedPath));
