'use strict';

angular.module('ngTutorialApp')
  .service('Req', function Req($rootScope, $http, Config) {
    return function (data) {
      return $http({
        method: 'post',
        url: Config.API,
        data: $.param(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function (response) {
        return response.data.data;
      }, function () {
        $rootScope.$broadcast('system.error', {
          type: 'network'
        });
      });
    };
  });
