


angular.module("popcornApp", 
	[
		'ngRoute',
		'popcornApp.controllers',
		'popcornApp.services'
	])

// configure the routes
  .config(function($routeProvider, $locationProvider) {
  // set up routes for each request
  $routeProvider
  .when('/movie/:movie_id', 
    {
      templateUrl: '/templates/movie.html', 
      controller: 'MovieController'
    })
  .when('/', 
    {
      templateUrl: '/templates/movies.html', 
      controller: 'MoviesController'
    })
  .otherwise({redirectTo: '/'});

	// This just prettifies what the url looks like 
	$locationProvider.html5Mode(true);
});



