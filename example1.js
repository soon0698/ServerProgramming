const http = require('http');

const client = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h1>' + "Oh My God!" + '<br>'+ "=========" + '</h1>');
	
}

const server = http.createServer(client);

server.listen(56008, ()=> {
	console.log("Server Waiting..56008...");
});

server.on('connection', ()=> {
	console.log("Web browser ask to me Connection");
});

server.on('request', ()=> {
	console.log("request event");
});

