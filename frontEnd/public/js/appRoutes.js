angular.module('clusterApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/main', {
			templateUrl: '../views/home.html',
			controller: 'MainController'
		})

		.when('/about', {
			templateUrl: '../views/about.html',
		})

		.when('/userManual', {
			templateUrl: '../views/userManual.html',
		})
		
		.when('/sub', {
			templateUrl: '../views/subCluster.html',
			controller: 'SubClusterCtrl'
		})
		.when('/login', {
			templateUrl: '../views/login.html',
			controller: 'LoginController'
		})
		.when('/', {
			templateUrl: '../views/splash.html',
		});
		
	$locationProvider.html5Mode(true);

}]);