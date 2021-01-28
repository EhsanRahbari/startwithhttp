const http = require('http');

http.createServer(function(request , response){

    console.log(request);


}).listen(5005);

console.log("server has been started");