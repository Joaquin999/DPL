var http=require('http');

http.createServer(function(req,res){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end('<head><meta charset="UTF-8"></head>Automaticos');
      console.info("Corriendo en el puerto 8080");
}).listen(process.env.PORT);
