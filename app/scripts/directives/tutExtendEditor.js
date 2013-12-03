'use strict';

angular.module('ngTutorialApp')
  .directive('tutExtendEditor', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var extended = false,
            extendElement = element.closest('.module-container'),
            placeHolder = $('<div />');

        placeHolder.insertBefore(extendElement);

        element.addClass('panel-extend-header');

        function addHandlers(element) {
          element.on('click', function () {
            toggle();
          });
        }

        addHandlers(element);

        function resizeHandler() {
          if (extended) {
            toggle();
          }
        }

        $(window).resize(resizeHandler);

        scope.$on('$destroy', function () {
          $(window).off('resize', resizeHandler);
        });

        function toggle() {
          if (extended) {
            collapse();
            extended = false;
          } else {
            extend();
            extended = true;
          }
          addHandlers(extendElement.children('[tut-extended-editor]'));
        }

        function extend() {
          extendElement.css('top', extendElement.offset().top);
          placeHolder.width(extendElement.outerWidth(true));
          placeHolder.height(extendElement.outerHeight(true));
          extendElement.addClass('panel-extended');
          extendElement.appendTo(document.body);
          placeHolder.css('display', 'block');
          $(window).trigger('resize');
        }

        function collapse() {
          placeHolder.css('display', 'none');
          extendElement.css('top', 0);
          extendElement.removeClass('panel-extended');
          extendElement.insertAfter(placeHolder);
        }
      }
    };
  });
