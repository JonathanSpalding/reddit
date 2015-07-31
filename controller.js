var app = angular.module("reddit"); 

app.controller("postsController", function($scope, fireBaseService){ //created a controller named postController
	$scope.getPosts = function() {

	fireBaseService.getPosts().then(function(res) { //injected "fireBaseService" into the "postController" and then created a function named "getPosts()" that runs our get request in our service.
		$scope.posts = res; 
	})
}
$scope.getPosts();
})