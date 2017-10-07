var express = require('express');
var router = express.Router();
var Article = require('../models/article');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Article.getArticles(function(err, articles){
  	if(err)
  		console.log(err);

  	res.json(articles);
  });
});

router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function(err, article){
  	if(err)
  		console.log(err);

  	res.json(article);
  });
});

router.get('/category/:category', function(req, res, next) {
  Article.getArticlesByCategory(req.params.category, function(err, articles){
  	if(err)
  		console.log(err);

  	res.json(articles);
  });
});

router.post('/', function(req, res, next){
	// Get From values
	var title = req.body.title;
	var category = req.body.category;
	var body = req.body.body;

	//Article object
	var newArticle = new Article({
		title:title,
		category:category,
		body:body
	});

	//create article
	Article.createArticle(newArticle, function(err, article){
		if(err)
			console.log(err);

		res.location('/articles');
		res.redirect('/articles');
	});
});

//update article
router.put('/', function(req,res,next){
	var data = {
		id: req.body.id,
		title : req.body.title,
		body : req.body.body,
		category : req.body.category
	};

	//create article
	Article.updateArticle(data, function(err, article, next){
		if (err) { 
			console.log(err); 
		}

		res.json(article);
		// res.location('/articles');
		// res.redirect('/articles');
	});
});


// delete article
router.delete('/:id',function(req,res,next){
	var id = req.params.id;

	//remove Article
	Article.removeArticle(id, function(err, article){
		if(err)
			console.log(err);

		res.json(article);
		/*res.location('/articles');
		res.redirect('/articles');*/
	});
});

module.exports = router;
