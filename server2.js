const http = require('http');
const url = require('url');
const os = require('os');

const myserver = (req, res) => {
	const query = url.parse(req.url).query;
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>' + query + ' ' + os.platform() + '</h1>');
}


const server = http.createServer(myserver);


server.listen(56001, ()=> {
	console.log('server running at http://127.0.0.1:56001');
	});
