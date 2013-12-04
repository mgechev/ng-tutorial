'use strict';

angular.module('ngTutorialApp')
  .controller('TutorialCtrl', function ($sce, $scope, $location, TutorialsCollection, StepsCollection, showdownFilter) {

    function setValue(value) {
      $scope.stepContent = $sce.trustAsHtml(showdownFilter(value));
    }

    $scope.$on('ui.tutorial-change', function (evnt, data) {
      $scope.tutorial = TutorialsCollection.getTutorialById(data.tutorial);
      $scope.gotoStep($scope.tutorial.steps[0]);
      $location.search({ tutorial: data.tutorial });
    });

    $scope.$on('ui.ready', function () {
      var search = $location.search() || {},
          tutorial = search.tutorial,
          step = search.step;
      $scope.tutorial = TutorialsCollection.getTutorialById(tutorial);
      if ($scope.tutorial) {
        $scope.gotoStep(step || $scope.tutorial.steps[0]);
      }
    });

    var currentStep = -1;
    $scope.gotoStep = function (step) {
      StepsCollection.getStepTask($scope.tutorial.id, step)
      .then(function (data) {
        var parentScope = $scope.$parent;
        parentScope.js = data.js || parentScope.js;
        parentScope.html = data.html || parentScope.html;
        setValue(data.task);
        var search = $location.search();
        search.step = step;
        $location.search(search);
        $scope.$emit('ui.change-code', {
          javascript: data.js,
          html: data.html
        });
      });
      currentStep = step;
    };

    $scope.viewSolution = function () {
      StepsCollection.getStepSolution($scope.tutorial.id, currentStep)
      .then(function (data) {
        $scope.$emit('ui.change-code', {
          javascript: data.js,
          html: data.html
        });
      });
    };

    setValue('###Select task from the navbar above');
  });
