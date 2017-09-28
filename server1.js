const http = require('http');

const server = http.createServer();


server.on('connection', (code) => {
	console.log("connection on!");
});

server.on('request', (code) =>	{
	console.log("request on");
});

server.on('close', (code) => {
	console.log("close on");
});

server.listen(52273, () => {
	console.log('server on....(52273)');
});

setTimeout( () => {server.close();}, 2000);
