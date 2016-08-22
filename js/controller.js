angular.module('routingControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "Home";
	})
	.controller('AboutController', function($scope) {
		$scope.title = "About";
		$scope.maps = [{
        
        address: '3 Avenalls Parade, Cheltenham',
        zoom: 14,
        width: 400      
        },
        {
        address: '28 Gallops Lane, Cheltenham',
        zoom: 16,
        width: 400      
        }];
  $scope.map = $scope.maps[0];
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