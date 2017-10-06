angular.module('kBApp')

.controller('CategoriesCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('/categories').then(function(res){
		$scope.categories = res.data;
	});
	
}]);