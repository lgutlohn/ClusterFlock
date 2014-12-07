angular.module('clusterApp').controller('AboutController', ['$scope',
	function($scope) {
		$scope.init = function() {
			$scope.page = "page-about";
		}

		$scope.init();
	}
]);