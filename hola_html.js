//fs es el encargado de comunicarse con los sistemas de archivos de la computadora
// se recomienda que el nombre de la variable sea igual al nombre del modulo
var http = require('http'), fs = require("fs");

//programación sincrona
//fs.readFileSync(path)
//var html = fs.readFileSync("./index.html");

// se incorpora dentro de esta funcion la función asíncrona para no tener que estar reiniciando el servidor cada vez que se realiza un cambio en el index.html
http.createServer(function(req, res) {
	//programación asincrona
	//fs.readFile(path, callback(err, data)) => callback es una funcion que se pasa por parametro y que se ejecuta después de que se terminó de hacer algo
	var html = fs.readFile("./index.html", function(err, html){
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(html);
		res.end();
	});
}).listen(8080);