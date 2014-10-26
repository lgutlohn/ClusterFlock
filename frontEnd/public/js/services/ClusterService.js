angular.module('ClusterService', []).factory('ClusterService', ['$http', function($http) {

	return {
		
		save : function(data) {
			return $http.get('/api/saveCluster?name='+data.name+'&description='+data.description);
		},

		getClusters : function() {
			return $http.get('/api/getClusters');
		},
	}	

}]);