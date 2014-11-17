describe('Service: TweetService', function () {
  var scope, TweetService;

  // load the controller's module
  beforeEach(module('clusterApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function($httpBackend, _TweetService_) {
    TweetService = _TweetService_;
    httpBackend = $httpBackend;
  }));

  afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
  });

  it ('Should succeed with a username', function() { 
    
  });

  it ('Should fail without a username', function() { 
    //test if a screen name is parsed
    //call the TweetService with no name
    // set up some data for the http call to return and test later.
    var returnData = [{text: '', username: '', mentions:[]}];
    // expectGET to make sure this is called once.
    httpBackend.expectGET('/api/tweets?name=').respond(returnData);
    // make the call...
    // var testOne = TweetService.get('eel3701');
    var returnedPromise = TweetService.get('');

    var result;
    returnedPromise.then(function(response) {
      result = response;
    });

    // flush the backend to "execute" the request to do the expectedPOSTassertion.
    httpBackend.flush();
    expect(result.data).toEqual(returnData);
  });

  it ('Should return correctly formatted response.', function() {
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