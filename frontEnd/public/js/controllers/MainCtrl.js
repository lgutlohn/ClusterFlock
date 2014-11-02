var id = 0;
appModule.controller('MainController', ['$scope', 'TweetService', 'ClusterService', '$location', '$rootScope',
	function($scope, TweetService, ClusterService, $location, $rootScope) {
		/* This holds all of our clusters
		[] = array
		{} = each individual object 
		*/
		$scope.clusters = [];

		$scope.init = function() {
			$scope.page = "page";
			$scope.cluster = {
				name: '',
				description: '',
				tweet: '',
				author: ''
			};
			ClusterService.getClusters().then(function(clusters) {
				clusters = clusters.data;
				var cluster;
				for (var key in clusters) {
					cluster = clusters[key];
					debugger
					$scope.clusters.push({
						name: cluster.name, 
						description: cluster.description, 
						id: cluster._id,
						tweet: cluster.tweet,
						author: cluster.author
					});
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
			$scope.cluster.tweet = data.text;
			$scope.cluster.author = data.username;
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
        	var clusterTweet = $scope.cluster.tweet;
        	var clusterAuthor = $scope.cluster.author;
        	debugger
        	/* Increase Index*/
        	++id;

        	/* Reset Form */
        	// default for resetting form
	    	$scope.master = {};
        	$scope.cluster = angular.copy($scope.master);

        	/* Save to backend */
        	ClusterService.save({name: clusterName, description: clusterDescription, tweet: clusterTweet, author: clusterAuthor})
        	.then(function(cluster) {
        		debugger
        		cluster = cluster.data;
        		if (cluster.id) {
        			// append each cluster into the cluster array
		        	$scope.clusters.push({name: clusterName, description: clusterDescription, id: cluster.id, tweet: clusterTweet, author: clusterAuthor});
        		} else {
        			alert ("Something went wrong!");
        		}
        	});
    	};

    	$scope.clusterClick = function(cluster) {
    		debugger
    		$rootScope.cluster = {
    			name: cluster.name,
    			description: cluster.description,
    			tweet: cluster.tweet,
    			author: cluster.author
    		}
    		$location.path("/sub");
    	}
	}

]);