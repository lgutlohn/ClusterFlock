angular.module('clusterApp').controller('LoginController', ['$scope', '$location', '$rootScope',
	function($scope, $location, $rootScope) {
		$scope.init = function() {
			$scope.page = "page-login";

		}

		$scope.init();

		$scope.login = function() {
			$location.path("/main");
		}

	}
]);