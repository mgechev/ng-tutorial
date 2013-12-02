'use strict';

angular.module('ngTutorialApp', ['ngAnimate'])
.config(function ($httpProvider) {
  $httpProvider.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded';
});