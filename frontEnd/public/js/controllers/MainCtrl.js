var id = 0;
angular.module('clusterApp').controller('MainController', ['$scope', 'TweetService', 'ClusterService', '$location', '$rootScope',
	function($scope, TweetService, ClusterService, $location, $rootScope) {
		/* This holds all of our clusters
		[] = array
		{} = each individual object 
		*/
		$scope.clusters = [];

		$scope.getClusters = function() {
			ClusterService.getClusters().then(function(clusters) {
				clusters = clusters.data;
				var cluster;
				for (var key in clusters) {
					cluster = clusters[key];
					$scope.clusters.push({
						name: cluster.name, 
						description: cluster.description, 
						id: cluster._id,
						tweet: cluster.tweet,
						author: cluster.author,
						subClusters: cluster.subClusters
					});
				};
			});
		}
		
		$scope.init = function() {
			$scope.page = "page";
			$scope.cluster = {
				name: '',
				description: '',
				tweet: '',
				author: ''
			};
			$scope.getClusters();
		}

		$scope.init();

		/* Delete Cluster */
    	$scope.remove = function ( cluster ) {
		  $scope.clusters.splice($scope.clusters.indexOf(cluster), 1);
		  ClusterService.deleteCluster({id: cluster.id}).then(function(res) {
		  	res = res.data;
		  	if (res.message != "Cluster deleted") {
		  		alert("Something went wrong");
		  	}
		  });
		};

		$scope.removeTweet = function ( tweet ) {
		  $scope.tweets.splice( $scope.tweets.indexOf(tweet), 1 );
		};

		$scope.newSubCluster = function(tweet,evt,cluster){
	    	evt.element.fadeOut();
	    	var noun = evt.element[0].getAttribute("data-noun");
	    	ClusterService.saveSubCluster({noun: noun, tweet: tweet.text, author: tweet.username, id: cluster.id})
        	.then(function(res) {
        		res = res.data;
        		if (res.message == "Sub Cluster Saved") {
        			tweet.nounCount--;
        			$scope.checkEmptyTweet(tweet);
        			cluster.subClusters.push({noun: noun, tweet: tweet.text, author: tweet.username});
        		} else {
        			alert ("Something went wrong!");
        		}
        	});
	    };

	    /* Considered empty when all nouns have been dragged out */
	    $scope.checkEmptyTweet = function(tweet) {
	    	if (tweet.nounCount <= 0) {
	    		$scope.removeTweet(tweet);
	    	}
	    }

		$scope.updateTweets = function() {
			TweetService.get($scope.name).then(function(dataResponse) {
		        $scope.tweets = dataResponse.data;
		        for (var tweetKey in $scope.tweets) {
		        	var tweet = $scope.tweets[tweetKey];
		        	$scope.nlpTweet(tweet);
		        }
		    });	
		};

		/* User drags a cluster onto New Cluster box
		 * Tweet fades out, Form pops up */
		$scope.newCluster = function(data,evt){
			$scope.setTempCluster(data);
	    	$('#newClusterForm').modal('toggle');
	    	evt.element.fadeOut();
	    };

	    $scope.setTempCluster = function(data) {
	    	$scope.cluster.tweet = data.text;
			$scope.cluster.author = data.username;
	    }

	    /* User clicks save and creates a new cluster */
	    $scope.saveNewCluster = function() {
	    	// Hide the form
	    	$('#newClusterForm').modal('hide');	
        	
        	// declaration of variables
        	var clusterName = $scope.cluster.name;
        	var clusterDescription = $scope.cluster.description;
        	var clusterTweet = $scope.cluster.tweet;
        	var clusterAuthor = $scope.cluster.author;
        	/* Increase Index*/
        	++id;

        	/* Reset Form */
        	// default for resetting form
	    	$scope.master = {};
        	$scope.cluster = angular.copy($scope.master);
        	debugger
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
    		$rootScope.cluster = {
    			name: cluster.name,
    			description: cluster.description,
    			tweet: cluster.tweet,
    			author: cluster.author,
    			subClusters: cluster.subClusters
    		}
    		$location.path("/sub");
    	};

        $scope.nlpTweet = function(tweet)
        {
        	var newTweetNPL="";
            var parsedText = nlp.pos(tweet.text);
            tweet.nounCount = 0;
            for(var i = 0; i < parsedText[0].tokens.length; i++)
            {
                if(parsedText[0].tokens[i].text != null){
               
                        if(parsedText[0].tokens[i].pos.parent.match("noun"))
                        {
                            var strippedNoun = parsedText[0].tokens[i].text.trim();
                            newTweetNPL += " <div class='btn btn-default btn-sm' data-noun='"+strippedNoun+"' ng-drag='true' ng-drag-data='tweet'>" + strippedNoun + "</div> ";
                        	tweet.nounCount++;
                        }
                        else
                        {
                            newTweetNPL += parsedText[0].tokens[i].text;
                        }
               
        		}
           
             }
	         tweet.parsedText = newTweetNPL;
        }
	}

]);