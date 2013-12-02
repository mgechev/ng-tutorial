'use strict';

describe('Directive: tutUpdateResult', function () {

  // load the directive's module
  beforeEach(module('ngTutorialApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tut-update-result></tut-update-result>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tutUpdateResult directive');
  }));
});
