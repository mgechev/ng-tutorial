'use strict';

describe('Controller: TutorialCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var TutorialCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TutorialCtrl = $controller('TutorialCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
