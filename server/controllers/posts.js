import express from 'express';
import BlogPosts from '../models/posts.model.js';

const router = express.Router();

export const createPost = async (request, response) => {
	const { username, title, postContent } = request.body;
	console.log('createPost Hit!');
	console.log(request.body);
	try {
		const newPost = await BlogPosts.create({
			username: username,
			title: title,
			postContent: postContent
		});
		console.log(newPost);
		response.status(201).json({ result: newPost });
	} catch (error) {
		console.log(error);
		response.status(404).send('New Post not created!');
	}
};

export const getPosts = async (request, response) => {
	console.log('getPost Hit!');
	try {
		const allBlogPosts = await BlogPosts.find();
		response.status(200).send(allBlogPosts);
	} catch (error) {
		console.log(error);
		response.status(500).send(error);
	}
};

export const likePost = async (request, response) => {
	const { userId } = request.body;
	const { id } = request.params;
	console.log('likePost Hit!');
	console.log(request.params);
	try {
		const post = await BlogPosts.findById(id);
		if (post.likes.includes(userId)) {
			const userIdLikeIndex = post.likes.indexOf(userId);
			post.likes.splice(userIdLikeIndex, 1);
		} else {
			post.likes.push(userId);
		}

		const updatedPost = await BlogPosts.findByIdAndUpdate(id, post, { new: true });
		console.log(post);
		response.status(200).json(updatedPost);
	} catch (error) {
		console.log(error);
	}
};

export default router;
