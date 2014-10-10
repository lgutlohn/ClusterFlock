angular.module('TweetService', []).factory('TweetService', ['$http', function($http) {

	return {
		
		get : function(name) {
			console.log(name);
			return $http.get('/api/tweets', { params: {
	            name: name
	        }});
		},
	}	

}]);