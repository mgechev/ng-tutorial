'use strict';

angular.module('ngTutorialApp')
  .factory('LocalStorage', function () {

    var storageKey = 'options',
        data = JSON.parse(localStorage.getItem(storageKey)) || {};

    return {
      get: function (key) {
        return data[key];
      },
      set: function (key, value) {
        data[key] = value;
        localStorage.setItem(storageKey, JSON.stringify(data));
      }
    };
  });
