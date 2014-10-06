angular.module('TweetService', []).factory('TweetService', ['$http', function($http) {

	return {
		// call to get all nerds
		get : function() {
			return $http.get('/api/tweets');
		},

		// call to POST and create a new geek
		// create : function(geekData) {
		// 	return $http.post('/api/geeks', geekData);
		// },

		// call to DELETE a geek
		// delete : function(id) {
		// 	return $http.delete('/api/geeks/' + id);
		// }
	}	

}]);