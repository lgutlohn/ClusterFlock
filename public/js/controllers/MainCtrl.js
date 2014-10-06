angular.module('MainCtrl', []).controller('MainController', ['$scope', 'TweetService', function($scope, TweetService) {
	$scope.updateTweets = function() {
		TweetService.get($scope.name).then(function(dataResponse) {
	        $scope.tweets = dataResponse.data;
	    });	
	}

}]);