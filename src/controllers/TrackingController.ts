import { Request, Response } from 'express';
import { getTrackingDetails } from '@/services/TrackingService';

/**
 * Handle GET /tracking-parcel/:token
 * @param req
 * @param res
 */
export const handleTrackingToken = async (req: Request, res: Response) => {
  const { trackingId } = req.params;

  if (!trackingId) {
    return res.status(400).json({
      success: false,
      error: 'Invalid tracking id',
    });
  }

  const tracking = await getTrackingDetails(trackingId);

  if (!tracking) {
    return res.status(400).json({
      success: false,
      error: 'Tracking Number Does Not Exist',
    });
  }

  res.json({ success: true, tracking });
};
