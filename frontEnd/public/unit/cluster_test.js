'use strict'


describe('Clusters', function(){

	var ClusterService,
		MainController,
		httpBackend;
	
	beforeEach(function() {
    module('ClusterService');
    module('MainController');

    inject(function($httpBackend, _ClusterService_, _MainController_) {
      ClusterService = _ClusterService_;
      MainController = _MainController_;
      httpBackend = $httpBackend;
    });
  });

	it('Should be able to display.', function(){

	});

	it('Should find applicable pictures.', function(){

	});

	it('Should be able to create a cluster', function(){
		ClusterService.save({name: 'fsdfd', description: "sdsa"}}).then(function(result) {
			expect(result.data.message).toEqual("Cluster Saved");
		});

	});

	it('Should be able to add to a cluster', function(){

	});

	it('Should be able to take away from a cluster', function(){

	});

	it('Should be able to be sealed', function(){

	});

	it('Should require a cluster name', function(){
		ClusterService.save({name: '', description: "my description"}}).then(function(result) {
			expect(result.data.message).not.to.equal("Validation failed");
		});
	});

	it('Should have a description', function(){
		ClusterService.save({name: 'fsdfd', description: ""}}).then(function(result) {
			expect(result.data.message).not.to.equal("Validation failed");
		});

	});

	it('Form has refreshed/reset', function(){
		var dummy = ClusterService.save({name: 'blah', description: ""}).then(function(result){
			expect(result).toBeDefined();
		});
	});


});
