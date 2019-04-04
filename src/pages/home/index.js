var template = require('./template.marko');
var empty = require('marko/helpers/empty');
var notEmpty = require('marko/helpers/notEmpty');

module.exports = function(req, res) {
	template.render({
		kelas: "PBKK H",
		templat: "Marko",
		dosen: "Pak Ridho",
		no: ["1", "2", "3"],
		nrp: ["05111640000047", "05111640000085", "05111640000159"],
		nama: ["Aidil", "Irham", "Yanuar"],
		asal: ["Pekanbaru", "Jakarta", "Surabaya"],
		"lists": [
			{
				"no": 1,
				"nrp": "05111640000047",
				"nama": "Aidil",
				"asal": "Pekanbaru"
			},
			{
				"no": 2,
				"nrp": "05111640000085",
				"nama": "Irham",
				"asal": "Bekasi"
			},
			{
				"no": 3,
				"nrp": "05111640000159",
				"nama": "Yanuar",
				"asal": "Surabaya"
			}
		]
	}, res);
};