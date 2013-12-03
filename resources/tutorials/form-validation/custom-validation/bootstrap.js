var myModule = angular.module('myModule', []);

myModule.directive('password', function () {
  var dictionary = ['foo', 'bar', '123', '123456', 'password'];
  return {
    link: function (scope, elem, attrs) {

    }
  };
});