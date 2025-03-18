import express from 'express';
import { userSignup } from '../controllers/userAuth.controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login');

export default router;
