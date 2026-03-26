// Inspecting request details  in an HTTP server
const http=require("http");

const server=http.createServer(function(req,res){
    // writeHead() set the response status code and headers
    res.writeHead(200,{"Content-type":"text/plain"});
    // end(): sends the response  body and close the response
    // req.method tells the HTTP method, such as GET & POST
    res.end("Methhods:"+req.method+"\nURL:"+req.url); 
});


server.listen(3001,function(){
    console.log("server is runinng at http://localhost:3001");

});
