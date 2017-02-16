angular.module("myApp")
	.controller("homeController", function($scope){
		$scope.message = "You are on home controller";
		$scope.values = ["Welcome","to","angular","World","!"];
		$scope.movies = [
			{
				id:"MV001",
				name:"Ocean's Eleven"
			},
			{
				id:"MV002",
				name:"Avengers"
			},
			{
				id:"MV003",
				name:"Transformers"
			},
			{
				id:"MV004",
				name:"Star Wars"
			}
		]
	})