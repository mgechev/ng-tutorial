var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function ($scope) {
  $scope.alertMe = function () {
    alert('Foo');
  };
});

myApp.directive('myDir', function () {
  return {
    scope: {
      method: '&'
    },
    restrict: 'E',
    template: '<button ng-click="method()">Call foo</button>'
  };
});

