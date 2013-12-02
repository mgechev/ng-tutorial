'use strict';

angular.module('ngTutorialApp')
  .controller('TutorialCtrl', function ($sce, $scope, TutorialsCollection, StepsCollection, showdownFilter) {

    function setValue(value) {
      $scope.stepContent = $sce.trustAsHtml(showdownFilter(value));
    }

    $scope.$on('ui.tutorial-change', function (evnt, data) {
      $scope.tutorial = TutorialsCollection.getTutorialById(data.tutorial);
      $scope.gotoStep($scope.tutorial.steps[0]);
    });

    setValue('###Select task from the navbar above');
    var currentStep = -1;
    $scope.gotoStep = function (step) {
      StepsCollection.getStepTask($scope.tutorial.id, step)
      .then(function (data) {
        var parentScope = $scope.$parent;
        parentScope.js = data.js || parentScope.js;
        parentScope.html = data.html || parentScope.html;
        setValue(data.task);
      });
      currentStep = step;
    };

    $scope.viewSolution = function () {
      StepsCollection.getStepSolution($scope.tutorial.id, currentStep)
      .then(function (data) {
        $scope.$emit('ui.view-solution', data);
      });
    };
  });
