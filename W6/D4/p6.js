// sending response in JSON format
const http= require("http");
const server =http.createServer(function(req,res){
    if (req.url === "/api/status"&& req.method ==="GET"){
        const responseData={
            sucess:true,
            message:"API is working",
            server:"NodeJS HTTP Module"
        };

        // JSON respponse using application/json
        res.writeHead(200,{"content-type":"application/json"});
        // JSON.stringify is a function converts object into a json to string 
        res.end(JSON.stringify(responseData));
        return;
    }
        res.writeHead(404,{"content-type":"application/json"});
        res.end(JSON.stringify({sucess:false,message:"Route not found."}));
});
server.listen(3001,function(){
    console.log("server is runinng at http://localhost:3001");

});