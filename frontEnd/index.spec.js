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
		    ptor.sleep(1000);
		    sidebar.clear();
		    sidebar.sendKeys('lgutlohn');
		    leftContainer.click();
		    ptor.sleep(1000);
		    sidebar.clear();
		    sidebar.sendKeys('lebron');
		    leftContainer.click();
		    ptor.sleep(1000);
		    sidebar.clear();
		    
	   	});

		it('Should access pop up Form', function(){
			
		});

		it('Should be able to add to a cluster', function(){

		});

		it('Should be able to take away from a cluster', function(){

		});

		it('Should be able to be sealed', function(){

		});

		it('Should require a cluster name', function(){

		});

		it('Should have a description', function(){

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
