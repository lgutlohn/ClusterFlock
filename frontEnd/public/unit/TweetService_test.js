'use strict';

describe('TweetService', function(){
  var TweetService,
      httpBackend;

  // Make sure the tweet service and backend is included
  beforeEach(function() {
    module('TweetService');

    inject(function($httpBackend, _TweetService_) {
      TweetService = _TweetService_;
      httpBackend = $httpBackend;
    });
  });

  // make sure no expectations were missed in your tests.
  // (e.g. expectGET or expectPOST)
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it ('Should send the username and return a response.', function() {
    // set up some data for the http call to return and test later.
    var returnData = [{text: 'My tweet', username: 'Eric', mentions:[]}];
    // expectGET to make sure this is called once.
    httpBackend.expectGET('/api/tweets?name=smith1302').respond(returnData);
    // make the call...
    var returnedPromise = TweetService.get('smith1302');

    var result;
    returnedPromise.then(function(response) {
      result = response;
    });

    // flush the backend to "execute" the request to do the expectedPOSTassertion.
    httpBackend.flush();

    expect(result.data).toEqual(returnData);

  });

});