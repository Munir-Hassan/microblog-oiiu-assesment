import express from 'express';

const router = express.Router();

import { signUp, signIn } from '../controllers/user.js';

router.post('/auth/signup', signUp);
router.post('/auth/signin', signIn);

export default router;
