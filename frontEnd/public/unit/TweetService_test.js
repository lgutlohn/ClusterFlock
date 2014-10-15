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

/* Kat Added */

describe('Running', function(){
  it('should pass', function()
  {
    expect(true).toBe(true);
  })
});

describe('user login form', function() {

    // critical
    it('ensure invalid email addresses are caught', function() {});
    it('ensure valid email addresses pass validation', function() {});
    it('ensure submitting form changes path', function() { });

    // nice-to-haves
    it('ensure client-side helper shown for empty fields', function() { });
    it('ensure hitting enter on password field submits form', function() { });

});

describe("Unit Testing Examples", function() {

  beforeEach(angular.mock.module('App'));

  it('should have a LoginCtrl controller', function() {
    expect(App.LoginCtrl).toBeDefined();
  });

  it('should have a working LoginService service', inject(['LoginService',
    function(LoginService) {
      expect(LoginService.isValidEmail).not.to.equal(null);

      // test cases - testing for success
      var validEmails = [
        'test@test.com',
        'test@test.co.uk',
        'test734ltylytkliytkryety9ef@jb-fe.com'
      ];

      // test cases - testing for failure
      var invalidEmails = [
        'test@testcom',
        'test@ test.co.uk',
        'ghgf@fe.com.co.',
        'tes@t@test.com',
        ''
      ];

      // you can loop through arrays of test cases like this
      for (var i in validEmails) {
        var valid = LoginService.isValidEmail(validEmails[i]);
        expect(valid).toBeTruthy();
      }
      for (var i in invalidEmails) {
        var valid = LoginService.isValidEmail(invalidEmails[i]);
        expect(valid).toBeFalsy();
      }

    }])
  );
});