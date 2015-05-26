angular.module('todoApp', [])
	.factory('todoService', ['$http', function($http){
		var runRequest = function(path, method) {
			return $http({
				method: method,
				url: path
			});
		}
		return {
			events: function(path, method) {
				return runRequest(path, method);
			}
		};
	}])
	.controller('TodoController', ['$scope', 'todoService', function ($scope, todoService) {
		
		var todoUrl = "/test/angularjs/todo.json";
		todoService.events(todoUrl, 'get').success(function(data, status) {
			$scope.todos = data;
		});

		$scope.addTodo = function(){
			$scope.todos.push({text: $scope.todoText, done:false});
			$scope.todoText = '';
		}

		$scope.remaining = function(){
			var count = 0;
			angular.forEach($scope.todos, function(todo){
				count += todo.done? 0: 1;
			});
			return count;
		}

		$scope.archive = function() {
			var oldTodos = $scope.todos;
			$scope.todos = [];
			angular.forEach(oldTodos, function(todo){
				if(!todo.done) {
					$scope.todos.push(todo);
				}
			});
		};

		$scope.warningLevel = function() {
			return $scope.remaining() < 3? "label-success": "label-warning";
		}



	}])
	.filter("checkedItems", function() {
		return function(items, showComplete) {
			var resultArr = [];
			angular.forEach(items, function(item){
				if(item.done == false || showComplete == true) {
					resultArr.push(item);
				}
			});
			return resultArr;
		};
	});