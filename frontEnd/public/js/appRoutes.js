appModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: '../views/home.html',
			controller: 'MainController'
		})
		.when('/sub', {
			templateUrl: '../views/subCluster.html',
			controller: 'SubClusterCtrl'
		});
		
	$locationProvider.html5Mode(true);

}]);