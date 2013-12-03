var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function ($scope) {
  $scope.foo = function () {
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

