var mongoose = require('mongoose'),
	PostSchema = mongoose.Schema({
		title: String,
		content: String,
		comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
		createdAt: {type: Date , default: Date.now}
	})
	Post = mongoose.model('Post', PostSchema)