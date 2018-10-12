var http = require('http'), fs = require("fs");

http.createServer(function(req, res) {
	var html = fs.readFile("./index.html", function(err, html){
		var html_string = html.toString();
		//expresion regular que busca dentro del html una variable {x}
		var variables = html_string.match(/[^\{\}]+(?=\})/g);
		var nombre = "Noelia";
		// recorre todas las variables
		for (var i = variables.length - 1; i >= 0; i--) {
			//Obtiene el valor del arreglo {x}
			var value = eval(variables[i]);
			//para pasarlo al html y escribir el valor correcto {x} = la variable nombre = "Noelia"
			html_string = html_string.replace("{"+variables[i]+"}", value);
		};

		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);