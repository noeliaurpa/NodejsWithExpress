//libreria que importamos, es la básica y es http, se encarga de servir aplicaciones web ya que se comunican por el protocolo http
var http = require('http');

var manejador = function(solicitud, respuesta){
	console.log("Recibimos una nueva petición");
	//cerramos la conexión
	respuesta.end("Hola mundo");
};

var servidor = http.createServer(manejador);
// se dice en que puerto quiere que escuche el servidor
servidor.listen(8080);

//Para ejecutar node, en la consola se debe de entrar a la carpeta del proyecto y escribe: node (nombre de archivo.js)
//Y para ver la página se escribe en el navegador: localhost:8080