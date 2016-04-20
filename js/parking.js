/**
 * parking Module
 *
 * Description
 */
var parking = angular.module('parking', []);

parking.controller('parkCtrl', ['$scope', function($scope) {

	$scope.alertTitle = "title in controller";
	$scope.alertDesc = "Desc in controller";
	$scope.alertFooter = "Footer in controller";

	$scope.cons = function () {
		console.log(new Date());
	}

}]);

parking.directive('alertDialog', [function(){
	// Runs during compile
	return {
		name: 'Alert Dialog',
		// priority: 1,
		// terminal: true,
		scope: {
			topic: '=topic',
			description: '=description',
			footer: '=footer',
			close: '&close'
		}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'AC', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '<div class="panel panel-danger">' +
		// 	'<div class="panel-heading">11</div>' +
		// 	'<div class="panel-body">22</div>' +
		// 	'<div class="panel-footer">22</div>' +
		// 	'</div>',
		templateUrl: 'partials/alert.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
}]);
