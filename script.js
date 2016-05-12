var app = angular.module("madLib", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/",
	{
		controller: "wordsController",
		templateUrl: "html/words.html"
	})
	.when("/results",
	{
		controller: "resultsController",
		templateUrl: "html/results.html"
	})
	.otherwise({redirectTo: "/"});
});