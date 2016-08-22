angular.module('routingControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "Home";
	})
	.controller('AboutController', function($scope) {
		$scope.title = "About";
	})
	.controller('option1Controller', function($scope) {
		$scope.title = "Menu Option 1";
		})
	.controller('option2Controller', function($scope) {
		$scope.title = "Menu Option 2";
		})
	.controller('option3Controller', function($scope) {
		$scope.title = "Menu Option 3";
		})
	.controller('option4Controller', function($scope) {
		$scope.title = "Menu Option 4";
		});