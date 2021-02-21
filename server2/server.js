const http = require('http');
http.createServer((req, res) => {
	res.write('servidor 2 online');
	res.end();
}).listen(4002, () => {
	console.log('servidor 2 está online');
});
