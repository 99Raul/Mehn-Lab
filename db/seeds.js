const Post = require('../models/posts');

const seedData = require('./seeds.json');

Post.deleteMany({})
	.then(() => {
		return Post.collection.insertMany(seedData);
	})
	.then(() => {
		process.exit();
	});
