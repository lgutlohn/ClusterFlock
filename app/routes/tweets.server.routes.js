'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users'),
	tweets = require('../../app/controllers/tweets');

module.exports = function(app) {

	app.route('/tweets')
		.get(tweets.myTest);
};