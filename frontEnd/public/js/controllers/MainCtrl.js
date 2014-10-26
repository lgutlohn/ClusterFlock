var id = 0;
angular.module('MainCtrl', ['ngDraggable']).controller('MainController', ['$scope', 'TweetService', 'ClusterService',
	function($scope, TweetService, ClusterService) {
		/* This holds all of our clusters
		[] = array
		{} = each individual object 
		*/
		$scope.clusters = [];


		$scope.onDropComplete = function(data,evt){
	       evt.element.fadeOut();
	    };

		$scope.updateTweets = function() {
			TweetService.get($scope.name).then(function(dataResponse) {
		        $scope.tweets = dataResponse.data;
		    });	
		};

		/* User drags a cluster onto New Cluster box
		 * Tweet fades out, Form pops up */
		$scope.newCluster = function(data,evt){
	    	$('#newClusterForm').modal('toggle');
	    	evt.element.fadeOut();
	    };

	    /* User clicks save and creates a new cluster */
	    $scope.save = function() {

	    	// Hide the form
	    	$('#newClusterForm').modal('hide');	
        	
        	// declaration of variables
        	var clusterName = $scope.cluster.name;
        	var clusterDescription = $scope.cluster.description;
        	
        	// append each cluster into the cluster array
        	$scope.clusters.push({name: clusterName, description: clusterDescription});
        	// creates a new customized cluster for existing tweet
        	createNewCustomizedClusterBox(clusterName);
        	
        	/* Increase Index*/
        	++id;

        	/* Reset Form */
        	// default for resetting form
	    	$scope.master = {};
        	$scope.cluster = angular.copy($scope.master);

        	/* back end stuff goes here */
        	ClusterService.save({name: clusterName, description: clusterDescription});
        	// make sure clusterbox is saved and always displayed 
    	};
    	
    	function createNewCustomizedClusterBox(clusterName)
    	{
    		var newBoxElement = angular.element("<div class='cluster-block' id=" + id + "ng-drop='true' ng-drop-success='onDropComplete($data,$event)''><h3>" + clusterName + "</h3></div>");
			$("#addedClusters").append(newBoxElement);
		}
	}

]);