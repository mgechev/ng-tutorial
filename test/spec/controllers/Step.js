'use strict';

describe('Controller: StepCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var StepCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StepCtrl = $controller('StepCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
