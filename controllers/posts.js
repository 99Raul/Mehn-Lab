const Post = require('../models/posts');
const express = require('express');
const router = express.Router();

//index route
router.get('/', (req, res) => {
	Post.find({})
		.then((posts) => {
			res.render('index', {
				posts
			});
		})
		.catch(console.error);
});

//new route
router.get('/new', (req, res) => {
	res.render('new');
})

//edit route
router.get('/:id/edit', (req, res) => {
	const id = req.params.id;
	Post.findById(id)
		.then(post => {
			res.render('edit', post);
		})
		.catch(console.error);
});
//put route
router.put('/:id', (req, res) => {
	Post.findOneAndUpdate({
			_id: req.params.id
		}, req.body, {
			new: true
		})
		.then((post) => {
			res.redirect('/posts');
		})
		.catch(console.error);
});



//show
router.get('/:id', (req, res) => {
	Post.findById(req.params.id)
		.then((post) => {
			res.render('show', post);
		})
		.catch(console.error);
});

router.post('/', (req, res) => {
	Post.create(req.body)
	  .then(post => {
		res.redirect('/posts');
	  })
	  .catch(console.error);
  });




module.exports = router;