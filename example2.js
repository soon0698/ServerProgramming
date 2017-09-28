const http = require('http');
const fs = require('fs');

var count = 0;
const client = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	if(count == 0)
   	{
	fs.readFile('HTML1.html', (error, data) => {
	res.end(data);
	});
	} if (count == 1)
	{
	 res.write("list");
	 res.write('<br>'+"Skincare number2");
	 res.end('<br>' + "=================");
	} if (count == 2)
	{
	res.end("Reset Conter (repeat again)");
	}
};

const server = http.createServer(client);

server.listen('65501', () => {
	console.log('Shopping Mall Server 65501');
});

server.on('request', () => {
	count++;
	if(count == 3)
	count = 0;
});
