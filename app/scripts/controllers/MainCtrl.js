'use strict';

angular.module('ngTutorialApp')
  .controller('MainCtrl', function ($scope, $rootScope, LocalStorage, TutorialsCollection) {

    TutorialsCollection.getTutorials()
    .then(function (data) {
      $scope.ready = true;
      $rootScope.$broadcast('ui.ready');
      $scope.tutorials = data;
    });

    $scope.$on('ui.change-code', function (evnt, data) {
      $scope.js = data.javascript;
      $scope.html = data.html;
    });

    $scope.startTutorial = function (tutorialId) {
      $scope.$broadcast('ui.tutorial-change', {
        tutorial: tutorialId
      });
    };

    $scope.skin = LocalStorage.get('skin');
    $scope.setSkin = function (skin) {
      $scope.skin = skin;
    };
  });
