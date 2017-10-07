angular.module('kBApp')

.controller('ArticlesCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('/articles').then(function(res){
		$scope.articles = res.data;
	});
}])

.controller('ArticlesCategoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('/articles/category/'+$routeParams.category).then(function(res){
		$scope.category = $routeParams.category;
		$scope.cat_articles = res.data;
	});
}])

.controller('ArticleDetailsCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$http.get('/articles/'+$routeParams.id).then(function(res){
		$scope.article = res.data;
	});

	$scope.removeArticle = function(){
		$http.delete('/articles/'+$routeParams.id).then(function(res){
			console.log('delete', res);
		});

		$location.path('/articles');
	};

}])

.controller('ArticleCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$http.get('/categories').then(function(res){
		$scope.categories = res.data;
	});

	$scope.addArticle = function () {
		var data = {
			title:$scope.title,
			body:$scope.body,
			category:$scope.category
		};

		$http.post('/articles', data).then(function(res){
			console.log('add article', res);
		});

		$location.path('/articles');
	}
}])

.controller('ArticleEditCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$http.get('/categories').then(function(res){
		$scope.categories = res.data;
	});

	$http.get('/articles/'+$routeParams.id).then(function(res){
		$scope.article = res.data;
	});

	$scope.updateArticle = function () {
		var data = {
			id:$routeParams.id,
			title:$scope.article.title,
			body:$scope.article.body,
			category:$scope.article.category
		};
	
		$http.put('/articles', data).then(function(res){
			console.log('update', res);
		});

		$location.path('/articles');
	}
}]);