angular.module('ClusterService', []).factory('ClusterService', ['$http', function($http) {

	return {
		
		save : function(data) {
			return $http.get('/api/saveCluster?text='+data.name+'&noun='+data.noun);
		},
	}	

}]);