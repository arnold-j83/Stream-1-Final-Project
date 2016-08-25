angular.module('routingControllers', [])
	.controller('HomeController', function($scope) {
		$scope.title = "Home";
	})
	.controller('AboutController', function($scope) {
		$scope.title = "About Apartment Brisas";
		$scope.maps = [{
        
        address: 'Brisas Del Mar, Formentera del Segura, spain',
        zoom: 16,
        width: 1000      
        },
        {
        address: 'Guardamar del Segura beach, Guardamar del Segura, Spain',
        zoom: 16,
        width: 1000      
        }
        ,
        {
        address: 'La Marina, Guardamar del Segura, Spain',
        zoom: 16,
        width: 1000      
        }];
  $scope.map = $scope.maps[0];
	})
	.controller('option1Controller', function($scope) {
		$scope.loading = true;
		$scope.title = "Apartment Brisas location";
		})
	.controller('option2Controller', function($scope) {
		$scope.loading = true;
		$scope.title = "Activities";
		})
	.controller('option3Controller', function($scope) {
		$scope.loading = true;
		$scope.title = "Menu Option 3";
		})
	.controller('option4Controller', function($scope) {
		$scope.loading = true;
		$scope.title = "Menu Option 4";
		});