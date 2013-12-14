'use strict';

angular.module('ngTutorialApp')
  .directive('tutEditor', function ($rootScope) {
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
        //Required because the two-way binding breaks when there is a syntax error
        //inside the iframe...
        $rootScope.$on('ui.change-code', function (evnt, data) {
          editor.setValue(data[attrs.tutEditor]);
        });
        editor.setTheme('ace/theme/chrome');
        editor.session.setTabSize(2);
        editor.session.setUseSoftTabs(true);
        editor.session.setMode('ace/mode/' + attrs.tutEditor);
        
        if (attrs.tutEditor === 'html') {
          ace.require('ace/ext/emmet');
          editor.setOption('enableEmmet', true);
        }

        function resizeHandler() {
          editor.resize();
        }
        $(window).resize(resizeHandler);
        scope.$on('$destroy', function () {
          editor.destroy();
          $(window).off('resizeHandler');
        });
      }
    };
  });
