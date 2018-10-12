var express = require("express");

var app = express();

app.set("view engine", "jade");

//verbos HTTP = GET / POST / PUT / PATCH / DELETE

//app.get("/", function(req, res) {
//	res.render("index",{hola: "Hola Noelia"});
//});
app.get("/", function(req, res){
	res.render("index");
});

//Esta ruta lo que hace es que cada ves que se ejecute en la url algo siempre va a redireccionar a la vista del index
app.get("/:cadenadetexto", function(req, res){
	res.render("index");
});

app.post("/form", function(req, res){
res.render("form");
});

app.listen(8080);