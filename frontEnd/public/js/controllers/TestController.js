angular.module('testing',[]).controller('TestController', function($scope, $location) {
    $scope.isActive = function(route) {
        return route === $location.path();
    };
})