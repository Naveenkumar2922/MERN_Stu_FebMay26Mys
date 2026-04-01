// Handling synchronous errors
const express =  require("express");
const app =  express();

app.get("/",function(req,res){
    res.send("visit/check?id=10 or /check without id");
});

app.get("/check",function(req,res,next){
    try{ //synchronous validation check
        if(!req.query.id){
            throw new Error("Query parameter 'id' is required");
        }
        res.json({
            success:true,
            id:req.query.id
        });


    }
    catch(error){
        // forward the error the to centralize the middleweare
        next(error);
    }

});
// centralized error handling middleweare
app.use(function(error,req,res,next){
    res.status(400).json({
        success:false,
        message:error.message
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
