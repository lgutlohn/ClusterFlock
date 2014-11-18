var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ClusterSchema   = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	tweet: {type: String},
	author: {type: String},
	subClusters: [{
		noun: { type: String, required: true },
		tweet: { type: String, required: true },
		author: { type: String, required: true }
	}]
});

module.exports = mongoose.model('Cluster', ClusterSchema);