'use strict';

describe('Directive: tutToggleSkin', function () {

  // load the directive's module
  beforeEach(module('ngTutorialApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tut-toggle-skin></tut-toggle-skin>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tutToggleSkin directive');
  }));
});
