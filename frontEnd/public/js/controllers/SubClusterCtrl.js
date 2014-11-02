appModule.controller('SubClusterCtrl', ['$scope', '$rootScope',
	function($scope, $rootScope) {

		$scope.init = function() {
			$scope.page = "page";
			$scope.name = $rootScope.cluster.name;
			$scope.description = $rootScope.cluster.description;
			$scope.subClusters = $rootScope.cluster.subClusters;
		}

		$scope.init();
	}

]);