var id = 0;
angular.module('MainCtrl', ['ngDraggable']).controller('MainController', ['$scope', 'TweetService', 'ClusterService',
	function($scope, TweetService, ClusterService) {
		/* This holds all of our clusters
		[] = array
		{} = each individual object 
		*/
		$scope.clusters = [];

		$scope.init = function() {
			ClusterService.getClusters().then(function(clusters) {
				clusters = clusters.data;
				var cluster;
				for (var key in clusters) {
					cluster = clusters[key];
					$scope.clusters.push({name: cluster.name, description: "", id: cluster._id});
				};
			});
		}

		$scope.init();

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
        	
        	/* Increase Index*/
        	++id;

        	/* Reset Form */
        	// default for resetting form
	    	$scope.master = {};
        	$scope.cluster = angular.copy($scope.master);

        	/* Save to backend */
        	ClusterService.save({name: clusterName, description: clusterDescription}).then(function(cluster) {
        		cluster = cluster.data;
        		if (cluster.id) {
        			// append each cluster into the cluster array
		        	$scope.clusters.push({name: clusterName, description: clusterDescription, id: cluster.id});
        		} else {
        			alert ("Something went wrong!");
        		}
        	});
    	};
	}

]);