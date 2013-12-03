var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function ($scope) {
  $scope.alertMe = function () {
    alert('Foo');
  };
});

myApp.directive('myDir', function () {
  return {
    restrict: 'E'
  };
});