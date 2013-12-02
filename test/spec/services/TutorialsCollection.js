'use strict';

describe('Service: Tutorialscollection', function () {

  // load the service's module
  beforeEach(module('NgtutorialApp'));

  // instantiate service
  var Tutorialscollection;
  beforeEach(inject(function (_Tutorialscollection_) {
    Tutorialscollection = _Tutorialscollection_;
  }));

  it('should do something', function () {
    expect(!!Tutorialscollection).toBe(true);
  });

});
