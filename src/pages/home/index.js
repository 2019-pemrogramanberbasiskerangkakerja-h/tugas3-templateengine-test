var template = require('./template.marko');
var empty = require('marko/helpers/empty');
var notEmpty = require('marko/helpers/notEmpty');

module.exports = function(req, res) {
	template.render({
		name: 'Aidil',
		age: 20,
		colors: ["blue", "red"],
		no: ["1", "2", "3"],
		nrp: ["05111640000047", "05111640000085", "05111640000159"],
		nama: ["Aidil", "Irham", "Yanuar"],
		asal: ["Pekanbaru", "Jakarta", "Surabaya"]
	}, res);
};