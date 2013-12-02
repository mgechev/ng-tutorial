'use strict';

angular.module('ngTutorialApp')
  .service('StepsCollection', function (Req, $q) {

    this.tasks = {};
    this.solutions = {};

    this.getStepTask = function (tutorial, step) {
      var self = this;
      if (this.tasks[tutorial] && this.tasks[tutorial][step]) {
        return $q.when(this.tasks[tutorial][step]);
      } else {
        return Req({ action: 'get_step', tutorial_id: tutorial, step_id: step })
        .then(function (data) {
          self.tasks[tutorial] = self.tasks[tutorial] || {};
          self.tasks[tutorial][step] = data;
          return data;
        });
      }
    };

    this.getStepSolution = function (tutorial, step) {
      var self = this;
      if (this.solutions[tutorial] && this.solutions[tutorial][step]) {
        return $q.when(this.solutions[tutorial][step]);
      } else {
        return Req({ action: 'get_step_solution', tutorial_id: tutorial, step_id: step })
        .then(function (data) {
          self.solutions[tutorial] = self.solutions[tutorial] || {};
          self.solutions[tutorial][step] = self.solutions[tutorial][step] || {};
          self.solutions[tutorial][step].js = data.js;
          self.solutions[tutorial][step].html = data.html;
          return data;
        });
      }
    };
  });
