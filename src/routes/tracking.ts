import express from 'express';
import { handleTrackingToken } from '@/controllers/TrackingController';

const router = express.Router();

/**
 * GET /tracking-parcel/:token
 * @param req
 * @param res
 */
router.get('/:trackingId', handleTrackingToken);

export default router;
