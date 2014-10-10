
      var App = angular.module('drag-and-drop', ['ngDragDrop']);
      alert(App);

      App.controller('oneCtrl', function($scope, $timeout) {

      	alert("Controller");
        $scope.list1 = [{'title': 'Lolcat Shirt'},{'title': 'Cheezeburger Shirt'},{'title': 'Buckit Shirt'}];
        $scope.list2 = [{'title': 'Zebra Striped'},{'title': 'Black Leather'},{'title': 'Alligator Leather'}];
        $scope.list3 = [{'title': 'iPhone'},{'title': 'iPod'},{'title': 'iPad'}];

        $scope.list4 = [];

        $scope.hideMe = function() {
          return $scope.list4.length > 0;
        }
      });