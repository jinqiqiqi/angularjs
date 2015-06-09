var app = angular.module("sportsStore", ["customFilters", "cart", "ngRoute"]);
app
.config(function($routeProvider) {
	$routeProvider
	.when("/complete", {
		templateUrl: "/views/thankYou.html"
	})
	.when("/placeorder", {
		templateUrl: "/views/placeOrder.html"
	})
	.when("/checkout", {
		templateUrl: "/views/checkoutSummary.html"
	})
	.when("/products", {
		templateUrl: "/views/productList.html"
	})
	.otherwise({
		templateUrl: "/views/productList.html"
	});
})
.constant('dataUrl', "http://192.168.1.7:5500/products")
.controller('sportsStoreCtrl', ['$scope', '$http', 'dataUrl', function($scope, $http, dataUrl){
	$scope.data = {};
	$http.get(dataUrl)
		.success(function(data){
			$scope.data.products = data;
		})
		.error(function(error, status) {
			$scope.data.error = error;
			$scope.data.status = status;
		});

}]);