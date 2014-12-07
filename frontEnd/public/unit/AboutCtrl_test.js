describe('Controller: AboutController', function () {
	var scope, AboutController;

	// load the controller's module
	beforeEach(module('clusterApp'));

	// Initialize the controller and a mock scope
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		MainController = $controller('AboutController', {$scope: scope});
	}));

	it('Should have init()', function() {
		expect(scope.init).toBeDefined();
	});

	it('$scope.page should be page-about', function() {
		scope.init();
		expect(scope.page).toBe("page-about");
	});
});
