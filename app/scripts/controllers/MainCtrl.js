'use strict';

angular.module('ngTutorialApp')
  .controller('MainCtrl', function ($scope, TutorialsCollection) {
    TutorialsCollection.getTutorials()
    .then(function (data) {
      $scope.ready = true;
      $scope.tutorials = data;
    });
    $scope.startTutorial = function (tutorialId) {
      $scope.$broadcast('ui.tutorial-change', {
        tutorial: tutorialId
      });
    };
  });
