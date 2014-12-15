
angular.module("popcornApp.controllers")

.controller("MovieController", function($scope, MoviesService, $routeParams, $sce){
// routeParams gives us access to the params in our function
	console.log("MovieController is booting");

	$scope.movies = MoviesService.movies();
// the underscore.js library makes it easy for us to search through an array,
// so we use gem 'underscore-rails'
	$scope.movie = _.find($scope.movies, function(movie){
		return movie.youtubeId == $routeParams.movie_id;
	});
// you can check out how to use _find here: http://underscorejs.org/#find

// now we'll make sure the app understands that youtube stuff is a trusted resource, using $sce service
	$scope.movie.youtubeUrl = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.movie.youtubeId + "?rel=0");
});