'use strict';

angular.module('ngTutorialApp')
  .controller('TutorialCtrl', function ($sce, $scope, TutorialsCollection, StepsCollection, showdownFilter) {
    $scope.$on('ui.tutorial-change', function (evnt, data) {
      $scope.tutorial = TutorialsCollection.getTutorialById(data.tutorial);
      $scope.gotoStep($scope.tutorial.steps[0]);
    });

    setValue('###Select task from the navbar above');
    $scope.gotoStep = function (step) {
      StepsCollection.getStep($scope.tutorial.id, step)
      .then(function (data) {
        setValue(data.content);
      });
    };

    function setValue(value) {
      $scope.stepContent = $sce.trustAsHtml(showdownFilter(value));
    }
  });
