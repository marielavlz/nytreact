// Require mongoose and create schema.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create Article Schema
var ArticleSchema = new Schema({
  // Title
  title: {
    type: String,
    trim: true,
    required: true
  },
  // Date
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  // Link
  url: {
    type: String,
    required: true
  }
});

// Create Model
var Article = mongoose.model('Article', ArticleSchema);

// Export it for use elsewhere
module.exports = Article;
