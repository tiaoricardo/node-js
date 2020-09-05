'use strict'

const app = require('../src/app');
const debug = require('debug')('app:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '81');

app.set('port',port);

const server = http.createServer(app);

server.listen(port);
server.on('error',onError);

console.log("API rodando na porta " + port);

function onError(e) {

	if (e.syscall !== 'listen') {
		throw e;
	}

}

function normalizePort(p) {
	
	const port = parseInt(p, 10);

	if (isNaN(port)) {
		return p;
	}

	if (port > 0) {
		return port;
	}

	return false;

}