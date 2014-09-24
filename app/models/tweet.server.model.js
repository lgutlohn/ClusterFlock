'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var TweetScheme = new Schema({
	created: {
		type: Date,
		default: ''
	},
	tweetString: {
		type: String,
		default: '',
		required: 'Tweet cannot be blank'
	},
	mention: {
		type: String,
		default: ''
	}
});

mongoose.model('Tweet', TweetScheme);