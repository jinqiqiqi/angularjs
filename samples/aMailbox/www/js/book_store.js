angular.module('HellowAngular', [])
	.controller('HellowController', ['$scope', function ($scope) {
	$scope.greeting = { text : 'Hello'};
}]);