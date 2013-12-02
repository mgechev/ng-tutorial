'use strict';

angular.module('ngTutorialApp', [])
.config(function ($httpProvider) {
  $httpProvider.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded';
});