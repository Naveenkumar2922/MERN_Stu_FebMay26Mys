// Directory(folder) operations:, mkdir,readdir and rmdir/rm
const fs =require("fs");
const Path=require("path");
const demoDir=Path.join(__dirname,"demo-folder");

// to create folder
fs.mkdirSync(demoDir,{recursive:true});
fs.writeFileSync(Path.join(demoDir,"file1.txt"),"file1 content");
fs.writeFileSync(Path.join(demoDir,"file2.txt"),"file2 content");

// to check the folder contents 
const entries = fs.readdirSync(demoDir);
console.log("directory contents:",entries);

// delete folder
fs.rmSync(demoDir,{recursive:true, force:true});
console.log("directory exists?",fs.existsSync(demoDir));
