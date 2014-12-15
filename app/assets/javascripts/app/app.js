
var abc = 1;

var app = angular.module("popcornApp", 
	[
		'ngRoute',
		'popcornApp.controllers',
		'popcornApp.services'
	])

// configure the routes
app.config(function($routeProvider, $locationProvider) {
  // set up routes for each request
  $routeProvider
  	.when('/movie/:movie_id',
  		{
  			controller: 'MovieController',
  			templateUrl: '/templates/movie.html'
  		})
    .when('/', 
      	{
        	controller: 'MoviesController',
        	templateUrl: '/templates/movies.html'
      	})
	.otherwise({redirectTo: '/'});

	// This just prettifies what the url looks like 
	$locationProvider.html5Mode(true);
});



