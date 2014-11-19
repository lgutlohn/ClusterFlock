describe('Controller: SubClusterController', function () {
	var scope, SubClusterController;

	// load the controller's module
	beforeEach(module('clusterApp'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope, _TweetService_, _ClusterService_, $location) {
		scope = $rootScope.$new();
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
		expect(scope.SubClusters).toBeDefined();
	});
});
