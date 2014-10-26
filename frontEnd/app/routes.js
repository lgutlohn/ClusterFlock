var Twit = require('twit');
var Cluster = require('./models/cluster');

module.exports = function(app) {

	app.get('/api/saveCluster', function(req, res) {
		var cluster = new Cluster();
		cluster.text = req.query.text;
		cluster.noun = req.query.noun;
		cluster.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({message: 'Cluster Saved'});
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