angular.module('kBApp')

.controller('ArticlesCtrl', ['$scope', '$http', function($scope, $http){
	
	$http.get('/articles').then(function(res){
		$scope.articles = res.data;
	});
	
}]);