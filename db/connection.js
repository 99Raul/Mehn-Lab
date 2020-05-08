const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/stack', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

module.exports = mongoose;
