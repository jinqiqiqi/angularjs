var items = [
	{price:"101", quantity: "2", title: "yy"},
	{price:"102", quantity: "12", title: "yy3"},
	{price:"103", quantity: "22", title: "yy2"},
	{price:"103", quantity: "22", title: "yy232"},
	{price:"104", quantity: "32", title: "yy1"}
];

var cartApp = angular.module('cartApp', []);
cartApp.controller('cartController', ['$scope', function ($scope) {
	
	$scope.items = items;
	$scope.remove = function(index){
		$scope.items.splice(index, 1);
	}

}]);

cartApp.controller('tController', ['$scope', function ($scope){
	$scope.t_name = "Hello Kinch";
}]);