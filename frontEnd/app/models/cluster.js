var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ClusterSchema   = new Schema({
	name: String,
	description: String
});

module.exports = mongoose.model('Cluster', ClusterSchema);