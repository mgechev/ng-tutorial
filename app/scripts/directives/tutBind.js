'use strict';

angular.module('ngTutorialApp')
  .directive('tutBind', function () {
    return {
      scope: {
        content: '=tutBind'
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch('content', function (val) {
          element.html(val.$$unwrapTrustedValue());
          element.scrollTop(0);
        });
      }
    };
  });
