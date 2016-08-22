angular.module('jaFinalProjectDirectives',[]).directive('movieInfoBox', function() {
  return {
    restrict: 'E',    // usage of the directive: E -> element
    scope: {
      movie: '=info'    // 'movie' set with the 'info' attribute
    },
    templateUrl: 'templates/directives/movie-info-box.html'
  };
})

.directive('movieNav', function(){
	return{
		'restrict': 'E',
		'scope': true,
		'templateUrl' : 'templates/directives/movieNav.html'
	}
})


.directive('makeMap', function() {
        var directive = {
            templateUrl: 'templates/directives/map.html',
            scope: {
                map: '='
            },
            link: function(scope, element, attrs) {
                console.log("in map directive link");
            },
            controller: function mapController($scope) {
                $scope.zoomIn = function() {
                    $scope.map.zoom++;
                };
 
                $scope.zoomOut = function() {
                    $scope.map.zoom--;
                }
 
                $scope.mapDimensions = function() {
                    if (!$scope.map.width) {
                        var width = 650;
                    } else {
                        width = $scope.map.width;
                    }
 
                    if (!$scope.map.height) {
                        var height = 400;
                    } else {
                        height = $scope.map.height;
                    }
                    return width + 'x' + height;
                }
            }
        };
        return directive;
    });