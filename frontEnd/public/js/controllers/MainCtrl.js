angular.module('MainCtrl', ['ngDraggable']).controller('MainController', ['$scope', 'TweetService',
	function($scope, TweetService) {
		$scope.onDropComplete=function(data,evt){
	       console.log(data);
	       console.log(evt);
	    };

		$scope.updateTweets = function() {
			TweetService.get($scope.name).then(function(dataResponse) {
		        $scope.tweets = dataResponse.data;
		    });	
		};

		$scope.sayHello = function() {
			return "Hello";
		};

	}
]);