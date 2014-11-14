angular.module('clusterApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/main', {
			templateUrl: '../views/home.html',
			controller: 'MainController'
		})
		.when('/sub', {
			templateUrl: '../views/subCluster.html',
			controller: 'SubClusterCtrl'
		})
		.when('/', {
			templateUrl: '../views/login.html',
			controller: 'LoginController'
		});
		
	$locationProvider.html5Mode(true);

}]);