var http=require('http');

http.createServer(function(req,res){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end('<head><meta charset="UTF-8"></head>Joaquín de León del Toro');
      console.info("Corriendo en el puerto 8080");
}).listen(8080);
