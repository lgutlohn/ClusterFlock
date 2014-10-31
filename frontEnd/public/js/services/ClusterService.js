angular.module('ClusterService', []).factory('ClusterService', ['$http', function($http) {

	return {
		
		save : function(name, description) {
			return $http.get('/api/saveCluster?name='+name+'&description='+description);
		},

		getClusters : function() {
			return $http.get('/api/getClusters');
		},

		getClusterName : function(data){
			return $http.get('/api/saveCluster?name='+data.name);
		},

		getDescription : function(data){
			return $http.get('/api/saveCluster?description='+data.description);
		}
	}	

}]);
