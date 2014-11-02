var Twit = require('twit');
var Cluster = require('./models/cluster');

module.exports = function(app) {

	// Needs to pass in name and description
	app.get('/api/saveCluster', function(req, res) {
		var cluster = new Cluster();
		cluster.name = req.query.name;
		cluster.description = req.query.description;
		cluster.tweet = req.query.tweet;
		cluster.author = req.query.author;
		cluster.save(function(err, cluster) {
			if (err) {
				res.send(err);
			} else {
				console.log(cluster._id);
				res.json({message: 'Cluster Saved', id: cluster._id});
			}
		});
	});

	// needs to pass in ID of cluster and noun that we are adding
	app.get('/api/saveSubCluster', function(req, res) {
		var newObj = {
			noun: req.query.noun
		}
		var condition = {"_id":req.query.id};
		var update =  {"$pushAll" : {objects : [newObj]}};
		Cluster.update(condition, update, function(err) {
			if (err) {
				res.send(err);
			} else {
				res.json({message: 'Cluster Saved'});
			}
		});
	});

	app.get('/api/getClusters', function(req, res) {
		Cluster.find({}, function(err, clusters) {
			if (err) {
				res.send(err);
			} else {
				var clusterMap = {};
			    clusters.forEach(function(cluster) {
			      clusterMap[cluster._id] = cluster;
			    });
				res.json(clusterMap);
			}
		});
	});

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	app.get('/api/tweets', function(req, res) {
		var T = new Twit({
		  consumer_key:         'rWwt9hfKTHMdtDuSKM3HlQQes',
		  consumer_secret:      'OMvhBmqmp65UlzPbAUe7n6zLX4cETgNmLTfiz0amHvu0NkzuN9',
		  access_token:         '1428205782-BNPCmdDQrxWehCxOtqVCO6WjUEGLI44nulgAsqO',
		  access_token_secret:  'DwY4XtSlRRW42e7yGKxm8frLyHbrZUYHQTFioZX1kGt3b',
		});
		console.log(req.query);
		T.get('statuses/user_timeline', { screen_name: req.query.name, count: 10, exclude_replies: true }, function(err, data, response) {
			var newFormat = [];
			if (!data) {
				res.jsonp(newFormat);
				return;
			}
			for (var i = 0; i < data.length; i++) {
				var tweet = data[i];
				var text = tweet['text'];
				var userObj = tweet['user'];
				var entitiesObj = tweet['entities'];
				var mentions = entitiesObj['user_mentions'];
				var username = userObj['screen_name'];
				newFormat.push({
					text: text,
					username: username,
					mentions: mentions
				});
			}
	  		res.jsonp(newFormat);
		});
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};