'use strict';

angular.module('ngTutorialApp')
  .directive('tutResult', function (Config) {
    var js, html, timeout;
    return {
      restrict: 'A',
      template: '<iframe frameborder="0" name="result" src="" id="tut-result-frame" class="tut-result-frame"></iframe><form method="post" target="result" id="tut-result-form"><input type="hidden" name="action" value="refresh"><input id="tut-result-html" type="hidden" name="html" value=""><input type="hidden" id="tut-result-js" name="js" value=""></form>',
      scope: {
        js: '=tutResultJs',
        html: '=tutResultHtml'
      },
      link: function postLink(scope, element, attrs) {
        function submit() {
          if (timeout) return;
          timeout = setTimeout(function () {
            $('#tut-result-js').val(js);
            $('#tut-result-html').val(html);
            $('#tut-result-form').submit();
            timeout = false;
          }, 100);
        }
        $('#tut-result-form').attr('action', Config.API);
        $('#tut-result-frame').attr('src', Config.API);
        scope.$watch('js', function (v) {
          if (js !== v) {
            js = v;
            submit();
          }
        });
        scope.$watch('html', function (v) {
          if (html !== v) {
            html = v;
            submit();
          }
        });
      }
    };
  });
