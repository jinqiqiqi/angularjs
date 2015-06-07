var app = angular.module("sportsStore", ["customFilters", "cart"]);
app
.constant('dataUrl', "http://192.168.1.7:2403/products")
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