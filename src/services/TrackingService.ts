import axios from 'axios';
import * as process from 'process';

/**
 * Get tracking details from 3rd party api
 * @param trackingId
 */
export const getTrackingDetails = async (trackingId: string) => {
  //api endpoint
  const url = `https://bps.bringer.io/public/api/v2/get/parcel/tracking.json?tracking_number=${trackingId}`;

  try {
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });
    return res.data;
  } catch (e) {
    return null;
  }
};
