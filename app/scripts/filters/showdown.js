'use strict';

angular.module('ngTutorialApp')
  .filter('showdown', function () {
    return function (input) {
      if (input) {
        var converter = new Showdown.converter();
        return converter.makeHtml(input);
      }
    };
  });
