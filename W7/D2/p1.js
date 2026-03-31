// "/" base url
// "/api/users"
const express = require("express");
const app = express();

//"api/users" /create /delete/ update/ :id

//Router objects help organize route Groups
const userRouter = express.Router();

apiRouter.get("/users",function(req,res){
    res.json({
        route:"/api/users",
        message:"Users route inside api router"
    });
});
apiRouter.get("/orders",function(req,res){
    res.json({
        route:"/api/orders",
        message:"Orders route inside api router"
    });
});