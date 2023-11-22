import { Request, Response } from 'express';
import { createAuthToken } from '@/services/AuthService';

/**
 * Handle POST /auth/generate-token
 * @param req
 * @param res
 */

export const handleGenerate = async (req: Request, res: Response) => {
  const { login, password } = req.body;

  //validate params
  if (!login || !password) {
    return res.status(400).json({
      success: false,
      error: 'Invalid params',
    });
  }

  try {
    const token = await createAuthToken(login, password);

    res.json({ success: true, token });
  } catch (e) {
    res.status(400).json({ success: false, error: (e as Error).message });
  }
};
