import express from 'express';
import { login, register } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register); // Can be disabled later after creating the admin user
router.post('/login', login);

export default router;
