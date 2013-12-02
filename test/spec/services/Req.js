'use strict';

describe('Service: Req', function () {

  // load the service's module
  beforeEach(module('NgtutorialApp'));

  // instantiate service
  var Req;
  beforeEach(inject(function (_Req_) {
    Req = _Req_;
  }));

  it('should do something', function () {
    expect(!!Req).toBe(true);
  });

});
