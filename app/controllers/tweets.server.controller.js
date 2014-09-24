'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Tweet = mongoose.model('Tweet'),
	_ = require('lodash'),
	Twit = require('twit');
/**
 * Show the current article
 */
exports.myTest = function(req, res) {
	var T = new Twit({
	  consumer_key:         'rWwt9hfKTHMdtDuSKM3HlQQes',
	  consumer_secret:      'OMvhBmqmp65UlzPbAUe7n6zLX4cETgNmLTfiz0amHvu0NkzuN9',
	  access_token:         '1428205782-BNPCmdDQrxWehCxOtqVCO6WjUEGLI44nulgAsqO',
	  access_token_secret:  'DwY4XtSlRRW42e7yGKxm8frLyHbrZUYHQTFioZX1kGt3b',
	});
	T.get('search/tweets', { q: 'banana since:2013-11-11', count: 100 }, function(err, data, response) {
  		res.jsonp(data);
	});
};