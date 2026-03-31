const express = require("express");
const app = express();
const morgan=require("morgan");


const cors =require("cors");


app.use(morgan("dev"));
app.use(cors());

app.get("/",function(req,res){
    res.json({
        message:"third-party middlewear executed before this respoonse"
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
