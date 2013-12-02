var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function ($scope, $timeout) {
  $scope.counter = 0;
  function tick() {
    $scope.counter += 1;
    $timeout(tick, 1000);
  }
  tick();
});

myApp.directive('myDir', function () {
  return {
    restrict: 'E',
    scope: {
      attr: '@'
    },
    link: function (scope, elem) {
      scope.$watch('attr', function (val) {
        elem.html(val);
      });
    }
  };
});