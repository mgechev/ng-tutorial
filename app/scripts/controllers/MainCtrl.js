'use strict';

angular.module('ngTutorialApp')
  .controller('MainCtrl', function ($scope, LocalStorage, TutorialsCollection) {

    TutorialsCollection.getTutorials()
    .then(function (data) {
      $scope.ready = true;
      $scope.$broadcast('ui.ready');
      $scope.tutorials = data;
    });

    $scope.$on('ui.view-solution', function (evnt, data) {
      $scope.js = data.js;
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
