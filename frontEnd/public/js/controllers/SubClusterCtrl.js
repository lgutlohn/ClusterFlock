angular.module('clusterApp').controller('SubClusterCtrl', ['$scope', '$rootScope',
	function($scope, $rootScope) {

		$scope.myvar = 5;

		$scope.nouns = {};
		$scope.orderedNouns = [];
		$scope.quantifySubClusters = function(objects) {
			if (!objects) return;
			for (var i = 0; i < objects.length; i++) {
				var object = objects[i];
				if (!$scope.nouns[object.noun]) {
					$scope.nouns[object.noun] = 1
				} else {
					$scope.nouns[object.noun]++;
				}
			}
		}

		$scope.percentizeNouns = function() {
			if (!$scope.subClusters) return;
			var total = $scope.subClusters.length;
			for (var noun in $scope.nouns) {
				var count = $scope.nouns[noun];
				var percent = count/total;
				percent = percent.toFixed(2) // 2 decimal places
				$scope.orderedNouns.push({noun: noun, percent: percent*100});
			}
			$scope.orderedNouns.sort(function(a,b) {
				return a.percent < b.percent;
			});
		}

		$scope.init = function() {
			$scope.page = "page";
			$scope.name = $rootScope.cluster.name;
			$scope.description = $rootScope.cluster.description;
			$scope.subClusters = $rootScope.cluster.subClusters;
			$scope.quantifySubClusters($scope.subClusters);
			$scope.percentizeNouns();
		}

		$scope.init();
	}

]);