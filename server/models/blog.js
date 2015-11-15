var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	PostSchema = mongoose.Schema({
		title: String,
		content: String,
		preview: String,
		comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
		createdAt: {type: Date , default: Date.now}
	})
	Post = mongoose.model('Post', PostSchema)