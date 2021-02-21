const http = require('http');
http.createServer((req, res) => {
	res.write('servidor 1 online');
	res.end();
}).listen(4001, () => {
	console.log('servidor 1 está online');
});
