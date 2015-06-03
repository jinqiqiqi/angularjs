var app = angular.module("sportsStore", ["customFilters"]);
app.controller('sportsStoreCtrl', ['$scope', function($scope){
	$scope.data = {
		products: [
			{
				name: "Product #1", description: "A product #1", category: "category #1", price: 100
			},
			{
				name: "Product #3", description: "A product #3", category: "category #3", price: 100
			},
			{
				name: "Product #2", description: "A product #2", category: "category #2", price: 100
			},
			{
				name: "Product #2", description: "A product #2", category: "category #2", price: 100
			},
			{
				name: "Product #4", description: "A product #4", category: "category #3", price: 100
			},
		]
	};
}]);