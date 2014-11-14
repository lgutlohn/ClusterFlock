describe('angularjs hello-portractor', function() {
	//var ptor = protractor.getInstance();

	describe("index", function() {
		
		/*it("should display the correct title", function(){
			ptor.get('/#');
			expect(ptor.getTitle()).toBe('Data Cluster');
		});*/
		
		it('should have a title', function() {
    		browser.get('http://localhost:8080/');
    		expect(browser.getTitle()).toEqual('Starter Node and Angular');
		});

		it('should find an element by text input model', function() {
		    var emailAddress = element(by.className('form-control'));
		    var password = element(by.className('form-control'));
		   
		    emailAddress.clear();
		    expect(password.getText()).toEqual('');
		   
		    emailAddress.sendKeys('smith1302');
		    expect(password.getText()).toEqual('');
	   	});

		it('should sign in', function() {

	   	});

		it('should have a sidebar of tweets', function() {
			browser.get('http://localhost:8080/main');
		    var sidebar = element(by.className('form-control'));
		    sidebar.clear();
	   	});

	   	it('Should be able to display.', function(){

		});

		it('Should find applicable pictures.', function(){

		});

		it('Should be able to create a cluster', function(){
			//var cluster = element(by.className('cluster-block'));
		    //cluster.clear();
		});

		it('Should be able to add to a cluster', function(){

		});

		it('Should be able to take away from a cluster', function(){

		});

		it('Should be able to be sealed', function(){

		});

		it('Should require a cluster name', function(){
			var clusterName = element(by.model('cluster.name')).sendKeys();
		    clusterName.clear();
		});

		it('Should have a description', function(){
			var clusterDescription = element(by.model('cluster.description'));
		    clusterDescription.clear();
		});

		it('Form has refreshed/reset', function(){

		});

		it('Should be able to create an account', function(){

		});

		it('Should be able to log into a session', function(){

		});

		it('Should be able to log out of a session', function(){

		});

		it('Admin should be able to ban a user', function(){

		});

		it('As an admin should be able to add/remove admins', function(){

		});

		it('As and admin should be able to see logged actions of users', function(){

		});


	});
});