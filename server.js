require('marko/node-require').install();

var express = require('express');
var app = express();

app.get('/', require('./src/pages/home'));

app.listen(3000, function() {
	console.log('Listening to port 3000');
});