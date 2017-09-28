const http = require('http');

http.get({
	hostname: 'www.naver.com',
	port: 80,
	path: '/',
	agent: false
}, (res) => {
	console.log(res);
});

