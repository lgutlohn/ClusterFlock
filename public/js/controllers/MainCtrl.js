angular.module('MainCtrl', []).controller('MainController', ['$scope', 'TweetService', function($scope, TweetService) {
	TweetService.get().then(function(dataResponse) {
        $scope.tweets = dataResponse.data;
    });	

}]);