import mongoose from 'mongoose';

const blogPosts = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	postContent: {
		type: String,
		required: true
	},
	likes: { type: [ String ], default: [] },
	createdAt: {
		type: Date,
		default: new Date().toString()
	},
	id: {
		type: String
	}
});

const BlogPosts = mongoose.model('BlogPosts', blogPosts);

export default BlogPosts;
