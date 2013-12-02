'use strict';

angular.module('ngTutorialApp')
  .directive('tutToggleSkin', function (LocalStorage) {

    function applyDarkSkin() {
      $(document.body).addClass('body-dark');
      $('.dropdown-menu').addClass('dropdown-menu-dark');
      $('.navbar').addClass('navbar-inverse');
      $('.btn').addClass('btn-inverse');
      $('.modal').addClass('modal-dark');
      $('.tut-result-frame').addClass('tut-result-frame-dark');
      $('.task-content').addClass('task-content-dark');
      ace.edit('javascript').setTheme('ace/theme/twilight');
      ace.edit('html').setTheme('ace/theme/twilight');
    }

    function applyLightSkin() {
      $(document.body).removeClass('body-dark');
      $('.dropdown-menu').removeClass('dropdown-menu-dark');
      $('.navbar').removeClass('navbar-inverse');
      $('.btn').removeClass('btn-inverse');
      $('.modal').removeClass('modal-dark');
      $('.tut-result-frame').removeClass('tut-result-frame-dark');
      $('.task-content').removeClass('task-content-dark');
      ace.edit('javascript').setTheme('ace/theme/chrome');
      ace.edit('html').setTheme('ace/theme/chrome');
    }

    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.on('click', function () {
          if (attrs.tutToggleSkin === 'dark') {
            applyDarkSkin();
            LocalStorage.set('skin', 'dark');
          } else {
            applyLightSkin();
            LocalStorage.set('skin', 'light');
          }
        });
        if (LocalStorage.get('skin') === 'dark') {
          //Should wait until the editors are initialized
          //TODO remove this ugly timeout
          setTimeout(function () {
            applyDarkSkin();
          }, 10);
        }
      }
    };
  });
