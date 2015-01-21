var items = [
	{price:"101", quantity: "2", title: "yy"},
	{price:"102", quantity: "12", title: "yy3"},
	{price:"104", quantity: "32", title: "yy1"}
];

var cartApp = angular.module('cartApp', []);
cartApp.controller('cartController', ['$scope', function ($scope) {
	
	$scope.items = items;
	$scope.currentRow = null;
	$scope.remove = function(index){
		$scope.items.splice(index, 1);
	}

	$scope.add = function(){
		$scope.items.push({price:"114", quantity: "32", title: "Hello"});
	}

	$scope.setCurrentRow = function (index) {
		$scope.currentRow = index;
	}

}]);

cartApp.controller('tController', ['$scope', function ($scope){

	$scope.t_name = "Hello Kinch";

	$scope.menuState = false;

	$scope.toggleMenu = function () {
		$scope.menuState = ! $scope.menuState;
	}


}]);