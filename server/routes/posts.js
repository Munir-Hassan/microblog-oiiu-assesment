import express from 'express';

const router = express.Router();

import { createPost, getPosts, likePost } from '../controllers/posts.js';

router.post('/', createPost);
router.get('/', getPosts);
router.get('/', likePost);

export default router;
