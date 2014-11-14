//var angular.module('clusterApp', ['ngRoute','ngAnimate','ngDraggable']) = angular.module('ClusterService',['../appRoutes.js']);
//to define angular.module('clusterApp', ['ngRoute','ngAnimate','ngDraggable']) within the Service test
//currently does not work

angular.module('clusterApp').factory('ClusterService', ['$http', function($http) {

	return {
		
		save : function(data) {
			return $http.get('/api/saveCluster?name='+data.name+'&description='+data.description+'&tweet='+data.tweet+'&author='+data.author);
		},

		saveSubCluster : function(data) {
			return $http.get('/api/saveSubCluster?noun='+data.noun+'&author='+data.author+'&tweet='+data.tweet+'&id='+data.id);
		},

		getClusters : function() {
			return $http.get('/api/getClusters');
		}
	}	

}]);
