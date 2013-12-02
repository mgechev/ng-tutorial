'use strict';

angular.module('ngTutorialApp')
  .service('TutorialsCollection', function (Req, $q) {
    this.tutorials = null;
    this.getTutorials = function () {
      var self = this;
      if (this.tutorials) {
        return $q.when(this.tutorials);
      } else {
        return Req({ action: 'get_tutorials' })
        .then(function (data) {
          self.tutorials = data;
          return data;
        });
      }
    };

    this.getTutorialById = function (tutorialId) {
      if (!this.tutorials) return null;
      for (var i = 0; i < this.tutorials.length; i += 1) {
        if (this.tutorials[i].id === tutorialId) {
          return this.tutorials[i];
        }
      }
      return;
    };

  });
