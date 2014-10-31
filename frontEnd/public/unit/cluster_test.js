'use strict'


describe('Clusters', function(){

	var ClusterService,
		httpBackend;
	
	beforeEach(function() {
    module('ClusterService');

    inject(function($httpBackend, _ClusterService_) {
      ClusterService = _ClusterService_;
      httpBackend = $httpBackend;
    });
  });

	it('Should be able to display.', function(){

	});

	it('Should find applicable pictures.', function(){

	});

	it('Should be able to create a cluster', function(){

	});

	it('Should be able to add to a cluster', function(){

	});

	it('Should be able to take away from a cluster', function(){

	});

	it('Should be able to be sealed', function(){

	});

	it('Should require a cluster name', function(){
		var dummy = ClusterService.save('name','descriptionTest');
		var name = ClusterService.getClusterName(dummy);
		expect(name).toEqual('name');
	});

	it('Should have a description', function(){
		var dummy = ClusterService.save('name','descriptionTest');
		var description = ClusterService.getDescription(dummy);
		expect(description).toEqual('descriptionTest');

	});

	it('Form has refreshed/reset', function(){
		var dummy = ClusterService.save('blah');
		expect(dummy).toBeDefined();
	});


});
