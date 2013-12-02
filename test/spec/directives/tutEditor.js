'use strict';

describe('Directive: tutEditor', function () {

  // load the directive's module
  beforeEach(module('ngTutorialApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tut-editor></tut-editor>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tutEditor directive');
  }));
});
