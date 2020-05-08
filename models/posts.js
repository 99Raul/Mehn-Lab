const mongoose = require('../db/connection');

const PostSchema = new mongoose.Schema({
	title: String,
	author: String,
	date: String,
	post: String,
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
