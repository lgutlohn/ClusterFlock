describe('Controller: LoginController', function () {
	var scope, LoginController;

	// load the controller's module
	beforeEach(module('clusterApp'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope, _TweetService_, _ClusterService_, $location) {
		scope = $rootScope.$new();
		MainController = $controller('LoginController', {$scope: scope, TweetService: _TweetService_, ClusterService: _ClusterService_});
	}));

	it('Should have init()', function() {
		expect(scope.init).toBeDefined();
	});

	it('Should have login()', function() {
		expect(scope.login).toBeDefined();
	});

	it('Should start with no users', function() {
		scope.init();
		expect(scope.page).toBe("page-login");
	});

	it('Should ', function() {

	});
 
});
