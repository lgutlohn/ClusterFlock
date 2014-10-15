/*var myApp = angular.module('test', []);

myApp.controller('MainController', ['$scope', 'TweetService',
	function($scope, TweetService) {
		$scope.updateTweets = function() {
			TweetService.get($scope.name).then(function(dataResponse) {
		        $scope.tweets = dataResponse.data;
		    });	
		});

myApp.controller('secondController', ['$scope', function($scope)
{
	$scope.log("hello");
	console.log("Hello");
}]);

var firstControllerScope = function ($scope)
{
  function($scope, TweetService) {
		$scope.updateTweets = function() {
			TweetService.get($scope.name).then(function(dataResponse) {
		        $scope.tweets = dataResponse.data;
		    });	
		}

	}

};

var secondControllerScope = function ($scope)
{
  	$scope.message("Hello");
  	$scope.log("Hello");
};*/