angular.module('cartApp', [])
	.controller('cartController', ['$scope', function ($scope) {
		
		$scope.items = [
			{price:"101", quantity: "2", title: "yy"},
			{price:"102", quantity: "12", title: "yy3"},
			{price:"103", quantity: "22", title: "yy2"},
			{price:"104", quantity: "32", title: "yy1"}
		];

		$scope.remove = function(index){
			$scope.items.splice(index, 1);
		}



	}]);