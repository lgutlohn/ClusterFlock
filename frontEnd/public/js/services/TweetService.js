appModule.factory('TweetService', ['$http', function($http) {

	return {
		
		get : function(name) {
			return $http.get('/api/tweets?name='+name);
		},
	}	

}]);