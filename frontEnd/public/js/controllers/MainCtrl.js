var id = 0;
appModule.controller('MainController', ['$scope', 'TweetService', 'ClusterService', '$location', '$rootScope', '$sce',
	function($scope, TweetService, ClusterService, $location, $rootScope, $sce) {
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

		$scope.init();

		$scope.newSubCluster = function(data,evt,cluster){
	    	evt.element.fadeOut();
	    	ClusterService.saveSubCluster({noun: cluster.name, tweet: data.text, author: data.username, id: cluster.id})
        	.then(function(res) {
        		debugger
        		res = res.data;
        		if (res.message == "Sub Cluster Saved") {
        			cluster.subClusters.push({noun: cluster.name, tweet: data.text, author: data.username});
        		} else {
        			alert ("Something went wrong!");
        		}
        	});
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

        	/* Save to backend */
        	ClusterService.save({name: clusterName, description: clusterDescription, tweet: clusterTweet, author: clusterAuthor})
        	.then(function(cluster) {
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
    	}
    	
    	
    	var newTweetNPL="";
    	$scope.styleNLP = function(tweet)
    	{
    		debugger
    		 var parsedText = nlp.pos(tweet.text);
    		
			 	//is an array of the sentence
			 	//each cell holds the word
			 //tweet[0].tokens
			 	//console.log(tweet[0].tokens[0]);

			 // newTweetNPL += "<div class='well text-center tweet-container' ng-drag='true' ng-drag-data='tweet'>";
			 for(var i = 0; i < parsedText[0].tokens.length; i++)
			 {
			 	if(parsedText[0].tokens[i].text != null){
	    			
	    				if(parsedText[0].tokens[i].pos.parent.match("noun"))
	    				{
	    						
	  						newTweetNPL += "<span style='background-color:yellow'> " + parsedText[0].tokens[i].text + "</span>";
	    				}

	    				else
	    				{
	    					newTweetNPL += "<span style='background-color:none'> " + parsedText[0].tokens[i].text + "</span>";
	    				}
	    			
	    		}
	    		
	    		
			 }
			 var test = $sce.trustAsHtml(newTweetNPL);
			 return test;
			
			//  newTweetNPL += "</div>";
			//  $('#twitterFeed').prepend(newTweetNPL);
    		
			// //  document.getElementById('twitterFeed').innerHTML = (newTweetNPL);
			// return
			// {
				
			// }
    		
    	}
    }

]);
