var items = [
	{price:"101", quantity: "2", title: "yy"},
	{price:"102", quantity: "12", title: "yy3"},
	{price:"104", quantity: "32", title: "yy1"}
];

var cartApp = angular.module('cartApp', []);
cartApp.controller('cartController', ['$scope', function ($scope) {
	
	$scope.items = items;
	$scope.currentRow = null;
	$scope.bill = {'total': 0, 'discount': 0};

	function totalCart () {
		var sum = 0;
		for (i in $scope.items) {
			var item = $scope.items[i];
			sum += item.price * item.quantity;
		}
		$scope.bill.total = sum;
		$scope.bill.discount = 0;
		if($scope.bill.total > 100) {
			$scope.bill.discount = 0.1;
		}

		$scope.bill.sub = $scope.bill.total * (1 - $scope.bill.discount);
	}


	$scope.$watch('items', totalCart, true);


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