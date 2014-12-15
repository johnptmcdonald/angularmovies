
angular.module("popcornApp.controllers")

.controller("MoviesController", function($scope, MoviesService){
	

	console.log("MoviesController is booting");

	console.log(MoviesService)

	$scope.movies = MoviesService.movies();


	$scope.addFavorite = function(movie){
		movie.isFavorite = true;
	};

	$scope.removeFavorite = function(movie){
		movie.isFavorite = false;
	};

});


