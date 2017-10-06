var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name : {
		type:String,
		index:true,
		required:true
	},
	description : {
		type:String
	}
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// Get all Categories
module.exports.getCategories = function(callback) {
	Category.find(callback);
};

// Get Category by id
module.exports.getCategoryById = function(id, callback) {
	Category.findById(id, callback);
};

// create category
module.exports.createCategory = function(newCategory, callback) {
	newCategory.save(callback);
}

