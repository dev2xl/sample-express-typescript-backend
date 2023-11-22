import express from 'express';
import { handleGenerate } from '@/controllers/AuthController';

const router = express.Router();

/**
 * POST /auth/generate-token
 * @param req
 * @param res
 */
router.post('/generate-token', handleGenerate);

export default router;
