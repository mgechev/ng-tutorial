'use strict';

describe('Service: Stepscollection', function () {

  // load the service's module
  beforeEach(module('NgtutorialApp'));

  // instantiate service
  var Stepscollection;
  beforeEach(inject(function (_Stepscollection_) {
    Stepscollection = _Stepscollection_;
  }));

  it('should do something', function () {
    expect(!!Stepscollection).toBe(true);
  });

});
