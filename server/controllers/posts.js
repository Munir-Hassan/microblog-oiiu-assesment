import express, { request } from 'express';
import BlogPosts from '../models/posts.model.js';

const router = express.Router();

export const createPost = async (request, response) => {
	const { title, postContent } = request.body;
	console.log(title, postContent);
	try {
		const newPost = await BlogPosts.create({ title: title, postContent: postContent });
		console.log(newPost);
		response.status(201).json({ result: newPost });
	} catch (error) {
		console.log(error);
		response.status(404).send('New Post not created!');
	}
};

export const getPosts = async (request, response) => {
	try {
		const allBlogPosts = await BlogPosts.find();
		response.status(200).send(allBlogPosts);
	} catch (error) {
		console.log(error);
		response.status(500).send(error);
	}
};

export const likePost = async (request, response) => {
	const { id, userId } = request.body;
	console.log(request.body);
	try {
		const post = await BlogPosts.findById(id);
		post.likes.push(userId);
		const updatedPost = await BlogPosts.findByIdAndUpdate(id, post, { new: true });
		console.log(post);
		response.status(200).json(updatedPost);
	} catch (error) {
		console.log(error);
	}
};

export default router;
