var app = angular.module("reddit");

app.service("fireBaseService", function($q, $http) { //created a service named "fireBaseService."

this.getPosts = function() {
	var dfd = $q.defer(); //injecting $q into the "fireBaseService."

	$http({ //injecting $http into the "fireBaseService."
		method: "GET", 
		url: 'https://devmtn.firebaseio.com/posts.json', //Created a get request that returns all of the posts from firebase.
	}).then(function(res) { //.then saves our response to $scope.posts.
		var data = res.data;
		dfd.resolve(data)
		console.log(res);
	})
	return dfd.promise;
}

})