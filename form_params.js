var http = require('http'), fs = require("fs"), parser = require("./params_parser.js"), renderView = require("./render_view.js");

var p = parser.parse;
var renderV = renderView.render;

http.createServer(function(req, res) {

	if (req.url.indexOf("favicon.ico") > 0) {
		return;
	}
	var html = fs.readFile("./index.html", function(err, html){
		var html_string = html.toString();
		var parametros = p(req);
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(renderV(html_string, parametros));
		res.end();
	});
}).listen(8080);