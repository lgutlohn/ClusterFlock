describe('Controller: SubClusterController', function () {
	var scope, SubClusterController;

	// load the controller's module
	beforeEach(module('clusterApp'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope, _TweetService_, _ClusterService_, $location) {
		scope = $rootScope.$new();
		$rootScope.cluster = {
			name: 'name',
			description: 'desc',
			subClusters: [{noun: 'noun'}]
		}
		SubClusterController = $controller('SubClusterCtrl', {$scope: scope, TweetService: _TweetService_, ClusterService: _ClusterService_});
	}));

	it('Should have init()', function() {
		expect(scope.init).toBeDefined();
	});

	it('Page should exist', function(){
		expect(scope.page).toBe("page");
	});

	it('name should exist', function(){
		expect(scope.name).toBeDefined();
	});

	it('Description should exist', function(){
		expect(scope.description).toBeDefined();
	});

	it('SubClusters should be defined', function(){
		expect(scope.subClusters).toBeDefined();
	});
	
	it('Nouns should be percentized', function(){
		expect(scope.percentizeNouns).toBeDefined();
	});

	it('Sub clusters should be quantified', function(){
		expect(scope.quantifySubClusters).toBeDefined();
	});

	it('Sub clusters should be ordered', function(){
		expect(scope.orderNouns).toBeDefined();
	});


	it('Should return false if quantifying subcluster is empty', function(){
		expect(scope.quantifySubClusters(null)).toEqual(false);
	});

	it('Should return true if quantifying subcluster has subclusters', function(){
		expect(scope.quantifySubClusters({noun: "noun"})).toEqual(true);
	});

	it('Quantifying subclusters should count nouns', function(){
		scope.quantifySubClusters(
			[{noun: "noun1"},
			{noun: "noun1"},
			{noun: "noun3"},
			{noun: "noun2"}]
		);
		expect(scope.nouns["noun1"]).toEqual(2);
		expect(scope.nouns["noun3"]).toEqual(1);
		expect(scope.nouns["noun2"]).toEqual(1);
	});

	it('percentizeNouns should return false if no subclusters', function(){
		scope.subClusters = null;
		expect(scope.percentizeNouns()).toEqual(false);
	});

	it('percentizeNouns should return true if subclusters exist', function(){
		scope.subClusters = [{noun: "noun1"}];
		expect(scope.percentizeNouns()).toEqual(true);
	});

	it('percentizeNouns should give a non empty orderedNouns array', function(){
		scope.orderedNouns = [];
		scope.nouns = [];
		scope.subClusters = [{noun: "noun1"},{noun: "noun1"},{noun: "noun3"},{noun: "noun2"}];
		scope.quantifySubClusters(scope.subClusters);
		scope.percentizeNouns();
		expect(scope.orderedNouns.length).toBeGreaterThan(1);
	});

	it('percentizeNouns should sort ordered nouns by percent', function(){
		scope.orderedNouns = [];
		scope.nouns = [];
		scope.subClusters = [{noun: "abc"},{noun: "abc"},{noun: "abc"},{noun: "ghi"},{noun: "ghi"},{noun: "def"}];
		scope.quantifySubClusters(scope.subClusters);
		scope.percentizeNouns();
		scope.orderNouns();
		expect(scope.orderedNouns[0].noun).toEqual("abc");
		expect(scope.orderedNouns[1].noun).toEqual("ghi");
		expect(scope.orderedNouns[2].noun).toEqual("def");
	});

	it('percentizeNouns should give percentage to each noun', function(){
		scope.orderedNouns = [];
		scope.nouns = [];
		scope.subClusters = [{noun: "abc"},{noun: "abc"},{noun: "ghi"},{noun: "def"}];
		scope.quantifySubClusters(scope.subClusters);
		scope.percentizeNouns();
		expect(scope.orderedNouns[0].percent).toEqual(50);
	});


});
