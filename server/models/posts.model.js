import mongoose from 'mongoose';

const blogPosts = mongoose.Schema({
	title: String,
	postContent: String,
	likes: { type: [ String ], default: [ 'hello' ] },
	createdAt: {
		type: Date,
		default: new Date()
	},
	id: {
		type: String
	}
});

const BlogPosts = mongoose.model('BlogPosts', blogPosts);

export default BlogPosts;
