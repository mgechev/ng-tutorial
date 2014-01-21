'use strict';

angular.module('ngTutorialApp')
  .directive('tutIntroScreen', function ($rootScope, LocalStorage) {
    return {
      link: function postLink(scope, element, attrs) {
        function remove() {
          element.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function () {
            element.remove();
          });
          element.addClass('intro-screen-hidden');
          LocalStorage.set(element.attr('id'), true);
        }
        $rootScope.$on('ui.ready', function () {
          element.css('visibility', 'visible');
          if (LocalStorage.get(element.attr('id'))) {
            element.remove();
          } else {
            element.bind('click', function () {
              remove();
            });
            $(document).bind('keydown', function (e) {
              remove();
            });
          }
        });
      }
    };
  });
