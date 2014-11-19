describe('angularjs hello-protractor', function() {
	//var ptor = protractor.getInstance();
	 ptor = protractor.getInstance();
	describe("index", function() {
		var $scope;
		
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
		    
		    // ptor.sleep(3000);
		   
		    emailAddress.sendKeys('smith1302');
		    expect(password.getText()).toEqual('');
		    // ptor.sleep(3000);
	   	});

		it('should show specific tweets for each username', function() {
			// ptor.sleep(3000);
		   	
		   	var leftContainer = element(by.className('navbar-header'));
			browser.get('http://localhost:8080/main');
		    var sidebar = element(by.className('form-control'));
		    sidebar.sendKeys('ericsmith');
		    leftContainer.click();
		    // ptor.sleep(1000);
		    sidebar.clear();
		    sidebar.sendKeys('lgutlohn');
		    leftContainer.click();
		    // ptor.sleep(1000);
		    sidebar.clear();
		    sidebar.sendKeys('lebron');
		    leftContainer.click();
		    // ptor.sleep(1000);
		    sidebar.clear();
		    
	   	});



		it('Should be able to add to a cluster', function(){
			var plusBox = element(by.className('cluster-block'));
			var clusterName = element(by.id('clusterName'));
			var description = element(by.id('description'));
			var save = element(by.id('mySave'));
			
			plusBox.click();
			clusterName.sendKeys('Test Cluster');
			description.sendKeys('Test Description');

			// ptor.sleep(1000);
			save.click();
			// ptor.sleep(1000);
		});


		it('Should access pop up Form', function(){
			var plusBox = element(by.className('cluster-block'));
			plusBox.click();
			ptor.sleep(1000);
		});

		it('Should be able to cancel out of form', function(){
			var clickOut = element(by.className('close'));
			clickOut.click();
			ptor.sleep(1000);
		});
		
		it('Should be able to delete a cluster', function(){
			var deleteButton = element(by.className('glyphicon-remove'));
			deleteButton.click();
			ptor.sleep(1000);
		});

		it('Should be able to click inside Test Cluster', function(){
			var testCluster = element(by.tagName('h3'));
			testCluster.click();
			ptor.sleep(1000);
		});

		it('Should be able to click Back outside Test CLuster', function(){
			var backButton = element(by.tagName('button'));
		});

		it('Go back to main', function(){
			ptor.sleep(1000);
			browser.get('http://localhost:8080/main');
			ptor.sleep(1000);
		});

		it('Should be able to cancel out of form', function(){

		});

		it('Should have a description', function(){

		});

		it('Form has refreshed/reset', function(){
			/* Expect the field of name to be "" */
		});

		it('Should be able to create an account', function(){

		});

		it('Should be able to log into a session', function(){

		});

		it('Should be able to log out of a session', function(){
		
			browser.get('http://localhost:8080/');
			ptor.sleep(1000);
		});

		it('Admin should be able to ban a user', function(){

		});

		it('As an admin should be able to add/remove admins', function(){

		});

		it('As and admin should be able to see logged actions of users', function(){

		});

		/* ABOUT PAGE */

		/* User manual page */


	});
});
