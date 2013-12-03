'use strict';

angular.module('ngTutorialApp')
  .directive('tutEditor', function () {
    return {
      replace: true,
      template: '<div class="text-editor"></div>',
      restrict: 'A',
      scope: {
        value: '=tutValue'
      },
      link: function postLink(scope, element, attrs) {
        element.attr('id', attrs.tutEditor);
        var editor = ace.edit(attrs.tutEditor),
            oldValue;
        editor.on('change', function () {
          var value = editor.getValue();
          if (oldValue !== value) {
            scope.value = value;
            oldValue = value;
            if (!scope.$$phase && !scope.$root.$$phase) {
              scope.$apply();
            }
          }
        });
        scope.$watch('value', function (value) {
          var current = editor.getValue(value);
          if (current !== value) {
            editor.setValue(value);
          }
        });
        $(window).resize(function () {
          editor.resize();
        });
        editor.setTheme('ace/theme/chrome');
        editor.getSession().setTabSize(2);
        editor.getSession().setUseSoftTabs(true);
        var Mode = require('ace/mode/' + attrs.tutEditor).Mode;
        editor.getSession().setMode(new Mode());
        scope.$on('$destroy', function () {
          editor.destroy();
        });
      }
    };
  });
