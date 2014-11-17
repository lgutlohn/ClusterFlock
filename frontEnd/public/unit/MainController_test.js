describe('Controller: MainController', function () {
	var scope, MainController;

	// load the controller's module
	beforeEach(module('clusterApp'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope, _TweetService_, _ClusterService_, $location) {
		scope = $rootScope.$new();
		MainController = $controller('MainController', {$scope: scope, TweetService: _TweetService_, ClusterService: _ClusterService_});
	}));

	it('Should have init()', function() {
		expect(scope.init).toBeDefined();
	});

	it('Should have cluster array', function() {
		expect(scope.clusters).toBeDefined();
	});

	it('Should have saveNewCluster()', function() {
		expect(scope.saveNewCluster).toBeDefined();
	});

	it('Should have updateTweets()', function() {
		expect(scope.updateTweets).toBeDefined();
	});

	it('Should have newSubCluster()', function() {
		expect(scope.newSubCluster).toBeDefined();
	});

	it('Should have newCluster()', function() {
		expect(scope.newCluster).toBeDefined();
	});

	it('Should have clusterClick()', function() {
		expect(scope.clusterClick).toBeDefined();
	});

	it('Should have getClusters()', function() {
		expect(scope.getClusters).toBeDefined();
	});

	it('Should have tweet noun parser', function() {
		expect(scope.nlpTweet).toBeDefined();
	});

	it('Should create an empty cluster holder', function() {
		scope.init();
		expect(scope.cluster).toBeDefined();
	});

	/* Figure out how to ignore jquery call */
	it('newCluster() should store data in cluster holder', function() {
	
		// scope.newCluster({text:"text", username:"name"}, "<div></div>");
		// expect()
		// expect(scope.cluster.tweet).toEqual("text");
		// expect(scope.cluster.author).toEqual("name");
	});
 
});