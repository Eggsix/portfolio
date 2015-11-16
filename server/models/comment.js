var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	CommentSchema = mongoose.Schema({
		_post: {type: Schema.Types.ObjectId, ref: 'Post'},
		user_id: String,
		username: String,
		comment: {type:String, required: true},
		createdAt: {type: Date, default: Date.now}
	})
	Comment = mongoose.model('Comment', CommentSchema)