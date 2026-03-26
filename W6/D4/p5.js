// Reading  POST body data
const http=require("http");

const server =http.createServer(function(req,res){
    if (req.url === "/submit"&& req.method ==="POST"){
        let body ="";
        // req here is readable stream
        req.on("data",function(chunk){
            body+=chunk.toString();

        });
        // 'end' executes when full request body has been received
req.on("end",function(){
    res.writeHead(200,{"content-type":"text/plain"});
    res.end("Recived req body data:"+body);
});
return;
    }
    res.writeHead(404,{"content-type":"text/plain"});
    res.end("Route not found.");
});
server.listen(3001,function(){
    console.log("server is runinng at http://localhost:3001");

});

