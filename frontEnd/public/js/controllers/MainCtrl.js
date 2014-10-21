angular.module('MainCtrl', ['ngDraggable']).controller('MainController', ['$scope', 'TweetService',
	function($scope, TweetService) {
		$scope.onDropComplete=function(data,evt){
	       evt.element.fadeOut();
	    };

		$scope.updateTweets = function() {
			TweetService.get($scope.name).then(function(dataResponse) {
		        $scope.tweets = dataResponse.data;
		    });	
		};

		$scope.sayHello = function() {
			return "Hello";
		};

		$scope.newCluster=function(data,evt){
	       console.log(data);
	       console.log(evt);
	       console.log(evt.element.firstChild.nodeValue);
	       evt.element.fadeOut();
	    };

	    $scope.save = function() {
        	console.log($scope.cluster);
    	};
    	


	}
]);