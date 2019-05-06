const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

var _db;

module.exports = {

	connect: function(callback) {
		MongoClient.connect(url, {useNewUrlParser: true}, function(err, client) {
			_db = client.db('test_db');
			return callback(err);
		});
	},

	getDB: function() {
		return _db;
	}
};
