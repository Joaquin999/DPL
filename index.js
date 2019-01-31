var http = require('http');

http.createServer(function(req,res){
     res.writeHead(200, {'Content-Type':'text/html'});
     res.end('<head><meta charset="UTF-8"></head>Automático 2');
}).listen(process.env.PORT);
