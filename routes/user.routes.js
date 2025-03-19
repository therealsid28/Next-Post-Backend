import express from 'express';
import { updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/me');
router.patch('/update-me', updateUser);

export default router;
