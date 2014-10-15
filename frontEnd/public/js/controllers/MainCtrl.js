angular.module('MainCtrl', []).controller('MainController', ['$scope', 'TweetService',
	function($scope, TweetService) {
		$scope.updateTweets = function() {
			if($scope.name.length==0){
				alert('User name must be present');
			}

			TweetService.get($scope.name).then(function(dataResponse) {
		        $scope.tweets = dataResponse.data;
		    });	
		}

		/*$scope.sayHello = function() {
			return "Hello";
			hello
		}*/

		$scope.onDragComplete=function(data,evt)
		{
			console.log("drag success, data:",data);
		}
		$scope.onDropComplete=function(data,evt)
		{
			console.log("drop success,data:", data);
		}

	}


]);

