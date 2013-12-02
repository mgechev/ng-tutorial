'use strict';

describe('Filter: showdown', function () {

  // load the filter's module
  beforeEach(module('ngTutorialApp'));

  // initialize a new instance of the filter before each test
  var showdown;
  beforeEach(inject(function ($filter) {
    showdown = $filter('showdown');
  }));

  it('should return the input prefixed with "showdown filter:"', function () {
    var text = 'angularjs';
    expect(showdown(text)).toBe('showdown filter: ' + text);
  });

});
