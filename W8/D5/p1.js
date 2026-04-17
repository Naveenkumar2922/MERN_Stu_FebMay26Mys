// File upload using multer : with file type, file size restrictions
const express=require("express");
const multer=require("multer");
async function main(){
    try{
        const app=express();
        //mimetype format of file
        const filefilter=(req,res,callback)=>{
            if(filefilter.mimetype=="image/png"||filefilter.mimetype==="image/jpg"){
                callback(null,true);
            }
            else{
                callback(new Error('only png and jpg images are allowed'),false);
            }

        };
        //approach 1 using dest
        const uploadWithDest=multer({
            dest:"uploads/",
            limits:{fileSize: 1024 *1024*2},filefilter
        });
        app.post('/upload-dest',uploadWithDest.single("file"),(req,res)=>{
            res.send({
                message:"uploaded using dest approach",
                note:"Filename is random, no extension preserved",
                file:req.file
            });
        });

        // Approach 2 using diskStorage:
        const storage = multer.diskStorage({
            // where to store
            destination:(req,res,callback)=>{
                callback(null,"uploads/");
            },
            // How to Name the File
            filename:(req,file,callback)=>{
                callback(null,Date.now()+"-"+file.originalname);
            }

        });
        const uploadwithDisk=multer({
            storage,
            limits:{fileSize: 1024 *1024*2},filefilter
        });
        app.post('/upload-disk',uploadwithDisk.single("file"),(req,res)=>{
            res.send({
                message:"uploaded using disk approach",
                note:"Filename is controlled,and extension preserved",
                file:req.file
            });
        });
        app.listen(3000,()=>{
            console.log("server started on port http://localhost:3000");
            console.log("POST/upload-dest");
        });
    
    }
    catch(error){
        console.log("Error",error.message);
    }

}
main();