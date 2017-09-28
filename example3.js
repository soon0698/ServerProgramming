const http = require('http');
const fs = require('fs');

const client = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
   	if(req.method == 'GET') {
	 if(req.url == '/list')	{
	fs.readFile('HTML1.html', (error, data) => {
	res.end(data);
	});
	}
	else if (req.url == '/cart') 
	{
	 res.write("list");
	 res.write('<br>'+"Skincare number2");
	 res.end('<br>' + "=================");
	} 
	else if (req.url == '/under')
	{
	res.end("Under construction..");
	}
}
};

const server = http.createServer(client);

server.listen('65501', () => {
	console.log('Shopping Mall Server 65501');
});

