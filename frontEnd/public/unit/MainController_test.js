describe('Controller: MainController', function () {
	var scope, MainController, rootScope;

	// load the controller's module
	beforeEach(module('clusterApp'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function($location, $controller, $rootScope, _TweetService_, _ClusterService_, $location) {
		scope = $rootScope.$new();
		rootScope = $rootScope;
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

	it('Should have setTempCluster()', function() {
		expect(scope.setTempCluster).toBeDefined();
	});

	it('Should have a method to delete clusters', function() {
		expect(scope.remove).toBeDefined();
	});

	it('Should create an empty cluster holder', function() {
		scope.init();
		expect(scope.cluster).toBeDefined();
	});

	it('Should delete clusters from cluster object', function() {
		scope.clusters = [1,2,3,4,5];
		scope.remove(3);
		expect(scope.clusters).toEqual([1,2,4,5]);
	});

	it('setTempCluster() should store data in cluster holder', function() {
		scope.setTempCluster({text:"text", username:"name"});
		expect(scope.cluster.tweet).toEqual("text");
		expect(scope.cluster.author).toEqual("name");
	});

	it('nlpTweet() should create a parsedText variable', function() {
		var tweet = {
			text: "my name is Eric"
		};
		scope.nlpTweet(tweet);
		expect(tweet.parsedText).toBeDefined();
	});

	it('clusterClick() should save cluster transition', function() {
		var cluster = {
			name: "name",
			description: "description",
			tweet: "tweet",
			author: "author",
			subClusters: "subClusters"
		};
		scope.clusterClick(cluster);
		expect(rootScope.cluster).toEqual({
			name: "name",
			description: "description",
			tweet: "tweet",
			author: "author",
			subClusters: "subClusters"
		});
	});

	it('ClusterClick should go to the subcluster page', function() {
	});
 
});