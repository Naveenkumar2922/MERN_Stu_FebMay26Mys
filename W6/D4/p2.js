// Creating a simple http server
const http=require("http");

// createServer():creates a HTTP server instance
// Accepts a callback two  important objects:
// 1. req: incoming request  details
// 2. res: outgoing response control

const server=http.createServer(function(req,res){
    // writeHead() set the response status code and headers
    res.writeHead(200,{"Content-type":"text/plain"});
    // end(): sends the response  body and close the response
    res.end("Hello from NodeJS HTTP server"); 
});

// listen() binds the servr  to a port and starts accepting requests
server.listen(3000,function(){
    console.log("server is runinng at http://localhost:3000");

});

// port numbers:
// 0-123: system ports 
// 1024-49151: "Registered ports"
// 27017 :  mangoDB
// 3000/3001
