'use strict';

angular.module('ngTutorialApp')
  .service('StepsCollection', function (Req, $q) {
    this.steps = {};
    this.getStep = function (tutorial, step) {
      var self = this;
      if (this.steps[tutorial] && this.steps[tutorial][step]) {
        return $q.when(this.steps[tutorial][step]);
      } else {
        return Req({ action: 'get_step', tutorial_id: tutorial, step_id: step })
        .then(function (data) {
          self.steps[tutorial] = self.steps[tutorial] || {};
          self.steps[tutorial][step] = data;
          return data;
        });
      }
    }
  });
