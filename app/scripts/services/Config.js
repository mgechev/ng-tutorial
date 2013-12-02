'use strict';

angular.module('ngTutorialApp')
  .factory('Config', function Config() {
    return {
      API: '../api/api.php',
      PARAM_PLACEHOLDER: '~'
    };
  });
