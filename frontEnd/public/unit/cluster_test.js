'use strict'


describe('Clusters', function(){

	var ClusterService,
		MainController,
		appModule,
		httpBackend;
	
	beforeEach(module('clusterApp'));

	beforeEach(inject(function($httpBackend, _ClusterService_) {
		httpBackend = $httpBackend;
		ClusterService = _ClusterService_;
	}));

	it('Should be able to create a cluster', function(){
		ClusterService.save({name: 'fsdfd', description: "sdsa"}).then(function(result) {
			expect(result.data.message).toEqual("Cluster Saved");
		});

	});

	it('Should be able to be delete a cluster', function(){

	});

	it('Should be able to display properly', function(){
		//see protractor
	});

	it('Should show an picture', function(){
		//see protractor
	});

	it('Should be able to add to a cluster', function(){
		var dummy = ClusterService.save({name: '', description: "bleh"});
		expect(dummy).toBeDefined();
	});

	it('Should be able to take away from a cluster', function(){
		
	});

	it('Should be able to be sealed', function(){

	});

	it('Should require a cluster name', function(){
		ClusterService.save({name: '', description: "my description"}).then(function(result) {
			expect(result.data.message).not.to.equal("Validation failed");
		});
	});

	it('Should have a description', function(){
		ClusterService.save({name: 'fsdfd', description: ""}).then(function(result) {
			expect(result.data.message).not.to.equal("Validation failed");
		});

	});

	it('Form has refreshed/reset', function(){
		var dummy = ClusterService.save({name: 'blah', description: ""}).then(function(result){
			expect(result).toBeDefined();
		});
	});

	it('Should fail to save without a user', function(){
		/*log.user = null;

			return log.save(function(err) {
				should.exist(err);
				done();
			});*/
	});


});
