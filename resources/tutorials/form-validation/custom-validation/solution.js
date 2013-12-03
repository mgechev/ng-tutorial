var myModule = angular.module('myModule', []);

myModule.directive('password', function () {

  var dictionary = ['foo', 'bar', '123', '123456', 'password'];

  function isValid(value) {
    return dictionary.indexOf(value) < 0;
  }

  return {
    require: 'ngModel',
    link: function (scope, elem, attrs, controller) {
      controller.$parsers.unshift(function (value) {
        if (isValid(value)) {
          controller.$setValidity('password', true);
          return value;
        } else {
          controller.$setValidity('password', false);
          return undefined;
        }
      });
    }
  };
});