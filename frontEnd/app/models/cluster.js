var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ClusterSchema   = new Schema({
	text: String,
	noun: String
});

module.exports = mongoose.model('Cluster', ClusterSchema);