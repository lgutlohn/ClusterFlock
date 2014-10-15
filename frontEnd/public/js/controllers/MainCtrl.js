angular.module('MainCtrl', []).controller('MainController', ['$scope', 'TweetService',
	function($scope, TweetService) {
		$scope.updateTweets = function() {
			TweetService.get($scope.name).then(function(dataResponse) {
		        $scope.tweets = dataResponse.data;
		    });	
		}

		$scope.sayHello = function() {
			return "Hello";
		}
		
		//$scope.onDragComplete=function(data,evt){
		//	console.log("drag success, data:", data);
    	//}

    	//$scope.onDropComplete=function(data,evt){
    	//	console.log("drop success, data:", data);
    	//}

	}
]);